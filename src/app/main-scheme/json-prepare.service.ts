import { Injectable } from '@angular/core';
import { Cells, ObjGroupsOfCells } from './types'
import jsonData from './main.json'

@Injectable({
  providedIn: 'root',
})
export class JsonPrepareService {
  getPrepared(): Cells[] {
    const isInt = Number.isInteger;
    const isArr = Array.isArray;

    if (!isArr(jsonData)) return [];

    let json: any = jsonData.sort((a,b) => (a.joinedWith ? 1 : 0) - (b.joinedWith ? 1 : 0))

    let sections: ObjGroupsOfCells | Cells[] = {};

    for (let e of json) {
      const x = sections[e.areaId];

      if (x) {
        x.push(e);
      } else {
        sections[e.areaId] = [e];
      }
    }

    sections = Object.values(sections);

    for (let i = 0; i < sections.length; i++) {
      const sectionCells = sections[i];
      const prepareGroups: ObjGroupsOfCells = {};

      for (let i2 = 0; i2 < sectionCells.length; i2++) {
        const cell = sectionCells[i2];
        const { id } = cell;
        if (!isInt(id)) continue;

        const findExistentGroup =
          (isInt(cell.joinedWith) && prepareGroups[String(cell.joinedWith)]) ||
          prepareGroups[id];
        if (isArr(findExistentGroup)) {
          cell._cellConnector = 'end';
          cell._connectToLeft = true

          const precedent = findExistentGroup[findExistentGroup.length - 1];
          precedent._cellConnector =
            precedent._cellConnector == 'end' ? 'between' : 'start';

          precedent._connectToLeft = ['end', 'between'].includes(precedent._cellConnector)
          precedent._connectToRight = ['start', 'between'].includes(precedent._cellConnector)

          const firstStatus = findExistentGroup[0]._groupStatus;
          if (firstStatus != 'semi' && firstStatus != cell.status) {
            findExistentGroup[0]._groupStatus = 'semi';
          }

          findExistentGroup.push(cell);
        } else {
          cell._groupStatus = cell.status;
          prepareGroups[id] = [cell];
        }
      }

      sections[i] = Object.values(prepareGroups).sort((a,b) => (b.length > 1 ? 1 : 0) - (a.length > 1 ? 1 : 0)).flat(1);
    }

    return sections;
  }
}

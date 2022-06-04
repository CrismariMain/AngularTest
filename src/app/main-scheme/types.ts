export type JsonStatuses = 'open' | 'closed';

export interface jsonCell {
  id: number;
  areaId: number;
  joinedWith: number | null;
  sku: string;
  defaultSku: string;
  status: JsonStatuses;
  countActive: number;
  _cellConnector?: 'start' | 'between' | 'end';
  _connectToLeft: boolean;
  _connectToRight: boolean;
  _groupStatus?: JsonStatuses | 'semi';
}

export type Cells = jsonCell[];

export type ObjGroupsOfCells = {
  [key: string]: Cells;
};
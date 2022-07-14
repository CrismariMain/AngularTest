import { StoreModule } from "@ngrx/store";
import { fooReducer } from './reducers/foo'


export default StoreModule.forRoot({
  ...fooReducer
})
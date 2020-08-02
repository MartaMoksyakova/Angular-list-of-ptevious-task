import { IItem} from '../interfaces/item.interface';

export class Item implements IItem{
 constructor(
     public id: number,
     public task: string,
     public checkTask: boolean,
     public done: boolean){
 }
}
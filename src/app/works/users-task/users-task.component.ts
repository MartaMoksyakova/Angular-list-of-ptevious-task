import { Component, OnInit } from '@angular/core';
import { IItem} from './../../shared/interfaces/item.interface';
import { Item} from  './../../shared/models/item';

@Component({
  selector: 'app-users-task',
  templateUrl: './users-task.component.html',
  styleUrls: ['./users-task.component.scss']
})
export class UsersTaskComponent implements OnInit {
  itemsArray: Array<IItem> = [];
  userName: string;
  task : string;
  checkTask: boolean;
  done : boolean;
  id: number;
  isAdd = true;
  openEdit:boolean;
  nameOfTask: string;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    const newItem = new Item(0, this.task, this.checkTask, this.done);
    if( this.itemsArray.length > 0 ) {
      newItem.id = this.itemsArray.slice(-1)[0].id +1;
    }
  this.itemsArray.push(newItem);
  this.task = '';
}

checkbox (index):void{
  this.done=this.itemsArray[index].checkTask;
}


editeItem (index):void{
  this.openEdit=true;
  this.nameOfTask=this.itemsArray[index].task;
  this.done=index;

}
saveEditItem(index):void{
  this.itemsArray[index].task=this.nameOfTask;
  this.openEdit=false;
}

deleteItem( index:number): void{
  this.itemsArray.splice(index, 1);
 }
}

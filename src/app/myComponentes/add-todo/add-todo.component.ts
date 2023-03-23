import { Component, EventEmitter , Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string
  desc:string
  @Output() toAdd : EventEmitter<Todo> = new EventEmitter();
  onSubmit(){
    // console.log("Hello");
    // alert("Hellow")
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.toAdd.emit(todo);
  }
} 

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo : Todo;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void{}
  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    // alert("Hellow")
  }

  onCheckBox(todo: Todo){
    

  }
}

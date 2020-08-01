import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {FormControl} from '@angular/forms';
import {ITodo} from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoes: ITodo[] = [];
  todo: ITodo;

  todoTest: ITodo = {
    id: 10,
    firstName: "update",
    lastName: "update"
  }

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getTodoList();
    // this.addTodo(this.todoTest);
    this.updateTodo(10);
  }

  // -----------------------------------------------------------------------
  getTodoList(){
    this.todoService.getTodoList()   //return mang phan tu trong obserable
      .subscribe(todo_list => {
        this.todoes = todo_list;
        console.log(todo_list);
      } );
  }

  getTodo(id: number) {
    this.todoService.getTodo(id)   //return 1 phan tu trong mang observable
      .subscribe(todo_simple =>{
        this.todo = todo_simple;
        console.log(todo_simple);
      });
  }

  deleteTodo(id: number){
    this.todoService.deleteTodo(id).subscribe();
  }

  addTodo(todo: ITodo){
    console.log(this.todoTest);
    this.todoService.addTodo(todo).subscribe();
  }

  updateTodo(id: number) {
    this.todoService.updateTodo(this.todoTest).subscribe();
  }

  // ###################################################################
  // deleteTodo(todo: ITodo){
  //   this.todoService.deleteTodo(todo)
  //     .subscribe( () => {
  //       this.todoes = this.todoes
  //       .filter(h => {h.id !== todo.id;})   //todoes da co du kieu truoc, filter trong mang todoes
  //     }); //ham filter callback doi tuong todo => kem theo bieu thuc dieu kien ? : any
  // }
  //
  // addTodo(){
  //   const todo: Partial<ITodo> = {
  //     title: 'LE MANH TUAN',
  //     completed: false
  //   };
  //   this.todoService.addTodo(todo).
  //   subscribe( todoIndex => {
  //     this.todoes.unshift(todoIndex);
  //   });
  // }
  //

}

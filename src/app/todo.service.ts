import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ITodo} from './todo';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // private readonly API_URL = 'http://jsonplaceholder.typicode.com/todos' ;

  private readonly API_URL = 'http://localhost:8080/customers' ;

  constructor(private http: HttpClient) { }
//-------------------------------------------------------------------//
  getTodoList(): Observable<ITodo[]>{
    return this.http.get<ITodo[]>(this.API_URL);
  }

  getTodo(id: number): Observable<ITodo>{
    const url = `${this.API_URL}/${id}`;
    return this.http.get<ITodo>(url);
  }

  updateTodo(todo: ITodo): Observable<ITodo> {
    const url =  `${this.API_URL}/${todo.id}`;
    return this.http.put<ITodo>(url, todo, this.httpOptions);
  }

  deleteTodo(id: number): Observable<{}>  {
    const url =  `${this.API_URL}/${id}`;
    return this.http.delete<ITodo>(url, this.httpOptions);
  }

  addTodo(todo: ITodo): Observable<ITodo>{
    return this.http.post<ITodo>(this.API_URL, todo, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

// ---------------------------------------------------------------------------------//
  // deleteTodo(todo: ITodo | number): Observable<ITodo>{
  //   const id = typeof todo === 'number' ? todo :  todo.id;
  //   const url = `${this.API_URL}/${id}`;
  //   return this.http.delete<ITodo>(url, this.httpOptions);
  // }
}

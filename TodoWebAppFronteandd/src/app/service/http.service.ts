import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = 'http://localhost:8080/todo/'

  constructor( private http: HttpClient) { }

    /**
     * fetchAll
     */
  public fetchAll(): Observable<Todo[]> {

      return this.http.get<Todo[]>(this.url + 'findall')
      
  }

   /**
     * addTodo
     */
  public addTodo(todo: Todo) {

    return this.http.post<Todo>(this.url + 'add', todo);
  }

   /**
     * delete
     */
  public delete(id: number) {
    return this.http.delete<Todo>(this.url + 'delete/' + id);
  }

   /**
     * findById
     */
  public findById(id: number) {
    return this.http.get<Todo>(this.url + 'findbyid/' + id);
  }

   /**
     * update
     */
  public update(id: number, todo: Todo) {
    return this.http.put<Todo>(this.url + 'update/' + id, todo);
  }


}

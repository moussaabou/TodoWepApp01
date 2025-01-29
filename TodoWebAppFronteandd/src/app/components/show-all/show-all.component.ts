import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Todo } from '../../model/todo';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrl: './show-all.component.css'
})
export class ShowAllComponent implements OnInit{

  listOfTodos!: Todo[];
  todoForm!: FormGroup;
  show = false;

  constructor(private httpService: HttpService , private fb: FormBuilder) { }

  ngOnInit(): void {

    this.httpService.fetchAll().subscribe(todo => this.listOfTodos = todo);

    this.todoForm = this.fb.group({
      task: [''],
      description: [''],
      date: [''],
      done: [''],
    });
  }

  handelSubmit() {
    this.httpService.addTodo(this.todoForm.value).subscribe();
    this.ngOnInit();
    window.location.reload();
  }

  showAddTodo() {
    this.show = !this.show;
  }

  delete(id: number) {
    this.httpService.delete(id).subscribe();
    this.ngOnInit();
  }

}

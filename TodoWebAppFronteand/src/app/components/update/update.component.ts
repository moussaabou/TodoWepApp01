import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../model/todo';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  todoToBeUpdated!: Todo; // العنصر الذي سيتم تحديثه
  updatedForm!: FormGroup; // النموذج التفاعلي
  show: boolean = false; // تحكم في عرض النموذج
  isLoading: boolean = true; // لعرض حالة التحميل
  errorMessage: string = ''; // لعرض الأخطاء إن وجدت

  constructor(
    private httpService: HttpService, 
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // استرداد المعرف من الرابط
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // استدعاء الخدمة لاسترداد العنصر
      this.httpService.findById(Number(id)).subscribe({
        next: (todo) => {
          this.todoToBeUpdated = todo;

          // تهيئة النموذج بالقيم المستردة
          this.updatedForm = this.fb.group({
            task: [todo.task, Validators.required],
            description: [todo.description],
            date: [todo.date, Validators.required],
            done: [todo.done],
          });

          this.isLoading = false; // تم إنهاء التحميل
        },
        error: () => {
          this.errorMessage = 'Failed to load the todo item. Please try again.';
          this.isLoading = false;
        },
      });
    } else {
      this.errorMessage = 'Invalid ID provided.';
      this.isLoading = false;
    }
  }

  handelSubmitUpdate(): void {
    // التحقق من صحة النموذج قبل الإرسال
    if (this.updatedForm.valid) {
      this.httpService.update(this.todoToBeUpdated.id, this.updatedForm.value).subscribe({
        next: () => {
          alert('Todo updated successfully!');
          window.location.reload(); // إعادة تحميل الصفحة

          // this.router.navigate(['/todos']); // إعادة توجيه بعد التحديث
        },
        error: () => {
          this.errorMessage = 'Failed to update the todo. Please try again.';
        },
      });
    } else {
      this.errorMessage = 'Please fill out all required fields.';
    }
  }

  update(): void {
    // تحديث القيم في النموذج عند الطلب
    this.updatedForm.patchValue({
      task: this.todoToBeUpdated.task,
      description: this.todoToBeUpdated.description,
      date: this.todoToBeUpdated.date,
      done: this.todoToBeUpdated.done,
    });

    this.show = !this.show;
  }
}

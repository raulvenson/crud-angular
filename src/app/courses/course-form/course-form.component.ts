import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => console.log(result),
      (error) => this.onError()
    );
  }
  onCancel() {
    throw new Error('Method not implemented.');
  }

  private onError() {
    this._snackBar.open('Erro ao Salvar curso', '', { duration: 5000 });
  }
}

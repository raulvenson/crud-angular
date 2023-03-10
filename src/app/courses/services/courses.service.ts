import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(500),
      tap((courses) => console.log(courses))
    );
  }

  save(course: Course) {
    console.log(course);

    return this.httpClient.post<Course>(this.API, course).pipe(first());
  }
}

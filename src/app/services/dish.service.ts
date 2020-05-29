import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Observable } from  'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
  }
getDish(id: string): Observable<Dish> {
  return this.http.get<Dish>(baseURL + 'dishes/' + id);
}
getFearuredDish(): Observable<Dish> {
  return this.http.get<Dish>(baseURL + 'dishs?featured=true').pipe(map(dishes => dishes[0]));
  }
  
 getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  } 
}

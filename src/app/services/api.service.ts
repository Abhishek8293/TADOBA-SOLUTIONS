import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';
import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URL_QUOTE: string = 'https://api.tadobasolutions.com/api/v1/quotes';

  constructor(private http:HttpClient) { }

  submitQuoteForm(formData:Quote):Observable<ApiResponse<string>>{
    const endpoint = `/save-quote`;
    const url = `${this.BASE_URL_QUOTE}${endpoint}`;
    return this.http.post<ApiResponse<string>>(url,formData);
  }


}

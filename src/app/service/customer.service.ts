import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CustomerDTO} from '../dto/customer-dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) {
  }

  addCustomer(customerDTO: CustomerDTO): Observable<CustomerDTO> {
    console.log(JSON.stringify(customerDTO));
    return this.http.post<CustomerDTO>('http://localhost:8080/customer', customerDTO);
  }


  getAllCustomers(): Observable<Array<CustomerDTO>> {
    return this.http.get<Array<CustomerDTO>>('http://localhost:8080/customer');
  }

  updateCustomer(customerDTO: CustomerDTO): Observable<CustomerDTO> {
    return this.http.put<CustomerDTO>('http://localhost:8080/customer', customerDTO);
  }

}

import {Component, OnInit} from '@angular/core';
import {CustomerDTO} from '../../dto/customer-dto';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerDto: CustomerDTO = new CustomerDTO();
  customerList: Array<CustomerDTO> = [];

  constructor(
    private customerService: CustomerService
  ) {
  }

  ngOnInit() {
    this.getAllCustomers();
  }

  alert(): void {
    alert('Validation Success');
  }

  addCustomer() {
    this.customerService.addCustomer(
      {
        id: 0,
        name: this.customerDto.name,
        address: this.customerDto.address,
        mobile: this.customerDto.mobile
      }
    ).subscribe(result => {
      if (result == null) {
        alert('Customer Added Successfully');
        // this.customerList.push(this.customerDto);
      } else {
        alert('Failed');
      }
    });
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(result => {
      this.customerList = result;
      console.log(JSON.stringify(result));
    });
  }

}

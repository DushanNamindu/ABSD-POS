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
  isEdit = false;

  constructor(
    private customerService: CustomerService
  ) {
  }

  ngOnInit() {
    this.getAllCustomers();
  }

  getTextValue(customer): void {
    // alert('Validation Success');
    this.isEdit = true;
    const obj = new CustomerDTO();
    this.customerDto = Object.assign(obj, customer);
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
        this.getAllCustomers();
        alert('Customer Added Successfully');
      } else {
        alert('Customer Added Failed');
      }
    });
  }

  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe(result => {
      this.customerList = result;
      console.log(JSON.stringify(result));
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customerDto).subscribe(
      result => {
        if (result == null) {
          this.getAllCustomers();
          alert('Customer Successfully Updated');
        } else {
          alert('Customer Update Failed');
        }
      });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(relsult => {
      if (relsult == null) {
        this.getAllCustomers();
        alert('Customer deleted successfully');
      } else {
        alert('Customer deleted failed');
      }
    });
  }
}

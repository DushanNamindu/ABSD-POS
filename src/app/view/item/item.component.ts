import {Component, OnInit} from '@angular/core';
import {invalid} from '@angular/compiler/src/render3/view/util';
import {ItemDTO} from '../../dto/item-dto';
import {ItemService} from '../../service/item.service';
import {CustomerDTO} from '../../dto/customer-dto';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemDTO: ItemDTO = new ItemDTO();
  itemList: Array<ItemDTO> = [];
  isEdit = false;

  constructor(
    private itemService: ItemService
  ) {
  }

  ngOnInit() {
    this.getAllItems();
  }

  addItem() {
    this.itemService.addItem(
      {
        code: 0,
        name: this.itemDTO.name,
        description: this.itemDTO.description,
        price: this.itemDTO.price,
        qty: this.itemDTO.qty
      }
    ).subscribe(result => {
      if (result == null) {
        this.itemDTO.name = '';
        this.itemDTO.description = '';
        this.itemDTO.price = '';
        this.itemDTO.qty = '';
        this.getAllItems();
        alert('Item Added Successfully');
      } else {
        alert('Item Added Failed');
      }
    });
  }

  getTextValue(item): void {
    this.isEdit = true;
    const obj = new ItemDTO();
    this.itemDTO = Object.assign(obj, item);
  }

  updateItem() {
    this.itemService.updateItem(this.itemDTO).subscribe(
      result => {
        if (result == null) {
          this.itemDTO.name = '';
          this.itemDTO.description = '';
          this.itemDTO.price = '';
          this.itemDTO.qty = '';
          this.isEdit = false;
          this.getAllItems();
          alert('Item Successfully Updated');
        } else {
          alert('Item Update Failed');
        }
      });
  }

  getAllItems() {
    this.itemService.getAllItems().subscribe(result => {
      this.itemList = result;
      console.log(JSON.stringify(this.itemList));
    });
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(relsult => {
      if (relsult == null) {
        this.itemDTO.name = '';
        this.itemDTO.description = '';
        this.itemDTO.price = '';
        this.itemDTO.qty = '';
        this.isEdit = false;
        this.getAllItems();
        alert('Item deleted successfully');
      } else {
        alert('Item deleted failed');
      }
    });
  }

}

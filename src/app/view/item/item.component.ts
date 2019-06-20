import {Component, OnInit} from '@angular/core';
import {invalid} from '@angular/compiler/src/render3/view/util';
import {ItemDTO} from '../../dto/item-dto';
import {ItemService} from '../../service/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemDTO: ItemDTO = new ItemDTO();
  itemList: Array<ItemDTO> = [];

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
        this.getAllItems();
        alert('Item Added Successfully');
      } else {
        alert('Item Added Failed');
      }
    });
  }

  getAllItems() {
    this.itemService.getAllItems().subscribe(result => {
      this.itemList = result;
      console.log(JSON.stringify(this.itemList));
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ShareService } from '../share.service';
import { UserList } from '../user-list';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  public users:UserList[];
  constructor(private shared:ShareService) { }

  ngOnInit(): void {
    this.users = [
      { TextList: 'item_01' },
      { TextList: 'item_02' },
      { TextList: 'item_03' },
      { TextList: 'item_04' },
    ];
  }
  onDrop(event: CdkDragDrop<string[]>) {
    this.shared.drop(event);
  }

}

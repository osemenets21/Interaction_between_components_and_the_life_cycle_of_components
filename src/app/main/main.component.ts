import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @ViewChild(TableComponent) childTable!: TableComponent;

  public user = 'Ivan Ivanov';
  public count = 0;
  public taskName!: string;
  public save = false;
  public pushName!: string;
  public getTask!: string;
  public index!: number;

  constructor() {}

  ngOnInit(): void {}

  addName(): void {
    this.taskName = this.pushName;
    this.pushName = '';
  }
  getName(index: number): void {
    this.save = true;
    this.getTask = this.childTable.taskList[index].name;
    this.index = index;
  }
  getlength(length: number) {
    setTimeout(() => {
      this.count = length;
    });
  }
  reName(): void {
    this.childTable.taskList[this.index].name = this.getTask;
    this.getTask = '';
    this.save = false;
  }
}

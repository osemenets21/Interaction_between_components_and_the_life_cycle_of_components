import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public newTask!: string;
  public count: number = 0;
  public userName: string = 'Ivan Ivanov';

  constructor() {}

  ngOnInit(): void {}

  clickBtnNewTask() {
    const objTask: Object = {
      task: this.newTask,
      status: false,
    };
  }
}

import {
  AfterViewChecked,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewChecked {
  @Input()
  set newTask(task: string) {
    if (task) {
      this.taskList.push({ name: task, check: false });
    }
  }
  @Output() changeTask = new EventEmitter<number>();
  @Output() countLength = new EventEmitter<number>();

  public taskList: Array<{
    name: string;
    check: boolean;
  }> = [
    { name: 'Html5', check: true },
    { name: 'CSS3', check: true },
    { name: 'SCSS', check: false },
    { name: 'Java Script', check: false },
    { name: 'JQuery', check: false },
    { name: 'Angular', check: false },
  ];

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewChecked(): void {
    this.changeCount();
  }
  changeCount(): void {
    this.countLength.emit(this.taskList.length);
  }
  checkbox(index: number): void {
    this.taskList[index].check = !this.taskList[index].check;
  }

  editUser(index: number): void {
    this.changeTask.emit(index);
  }
  deleteUser(index: number): void {
    this.taskList.splice(index, 1);
    this.ngAfterViewChecked();
  }
}

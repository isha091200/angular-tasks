import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule, NgIf, NgFor, NgForOf],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  taskArray = [{taskName:'test',isCompleted:false}];
  filter: 'all' | 'completed' | 'incomplete' = 'all';
  constructor(){

  }

  ngOnInit(){

  }

  onSubmit(form:NgForm){
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted:false
    })
    console.log(this.taskArray);
    
    form.reset();
  }

  onDelete(index:number){
    console.log(index);
    this.taskArray.splice(index, 1);
    
  }

  onChange(index:number){
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onUpdate(index: number) {
    const updatedTaskName = prompt("Edit task name:", this.taskArray[index].taskName);
    if (updatedTaskName !== null && updatedTaskName.trim() !== "") {
      this.taskArray[index].taskName = updatedTaskName.trim();
    }
  }

  setFilter(value: 'all' | 'completed' | 'incomplete') {
    console.log('set',this.filter);
    
    this.filter = value;
  }

  getFilteredTasks() {
    console.log('get',this.filter);

    if (this.filter === 'completed') {
      return this.taskArray.filter(task => task.isCompleted);
    } else if (this.filter === 'incomplete') {
      return this.taskArray.filter(task => !task.isCompleted);
    }
    return this.taskArray;
  }
}

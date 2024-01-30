import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';

import { Comments } from './model/Comments';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  constructor(private router:Router,private service: CrudService){}
  data:any[]=[];

  @ViewChild('userForm')userForm:NgForm

  getStudentsData() {
    this.service.getComment().subscribe({
      next: (val) => { console.log(val);this.data= val; }

    });
  }
 
 
  onSubmit(add : Comments) {
    // this.serv.courses.push(add);
    // this.router.navigate(['\posts']);

  console.log(add.username);

    this.service.addComment(add).subscribe({
      next: function (data) {
        console.log(data);
      },
      error: (err) => alert(err.message),
      complete: () => alert('completed'),
    });
    //  this.getStudentsData();
    // this.router.navigate(['\comment']);
  }
}

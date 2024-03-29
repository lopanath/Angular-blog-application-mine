import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { PostlistService } from '../../services/postlist.service';
import { addpost } from '../model/addPost';

@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent {

  constructor(private serv:PostlistService,private router:Router,private service: CrudService){}
  data:any[]=[];

  @ViewChild('userForm')userForm:NgForm
  getStudentsData() {
    this.service.getBlog().subscribe({
      next: (val) => { console.log(val);this.data= val; }

    });
  }
 
 
  onSubmit(add : addpost) {
    // this.serv.courses.push(add);
    // this.router.navigate(['\posts']);


    this.service.addBlog(add).subscribe({
      next: function (data) {
        console.log(data);
      },
      error: (err) => alert(err.message),
      complete: () => alert('completed'),
    });
     this.getStudentsData();
    this.router.navigate(['\posts']);
  }

  
}

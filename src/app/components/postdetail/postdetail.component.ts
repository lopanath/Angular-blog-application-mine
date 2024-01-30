import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { NgbCalendarEthiopian } from '@ng-bootstrap/ng-bootstrap';
import { CrudService } from '../../services/crud.service';
import { PostlistService } from '../../services/postlist.service';
import { addpost } from '../model/addPost';

@Component({
  selector: 'app-postdetail',
  standalone: true,
  imports: [RouterModule,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './postdetail.component.html',
  styleUrl: './postdetail.component.css'
})
export class PostdetailComponent implements OnInit{
  constructor(
    private service: PostlistService,
    private activeRoute: ActivatedRoute,
    private serv:CrudService
  ) {}
course :any;
  data: addpost[] = [];
news:string[]=[];
  msg:string[]=[];

  getStudentsData() {
    this.serv.getBlog().subscribe({
      next: (val) => { console.log(val);this.data= val; }

    });
  }
 
  courseId: any = 0;

  ngOnInit(): void {
    this.courseId = this.activeRoute.snapshot.params['id'];
   
     this.getStudentsData();
    //  this.course = this.data.find((x) => x.id == this.courseId);
    //   console

    for(let i in this.data)
    {
     
    }
        
    }
 
    
  }



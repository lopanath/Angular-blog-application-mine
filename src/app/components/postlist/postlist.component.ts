import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { PostlistService } from '../../services/postlist.service';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent implements OnInit{

  constructor(private serv: PostlistService,private service:CrudService) {}



  news: any[] = [];

  getStudentsData() {
    this.service.getBlog().subscribe({
      next: (val) => { console.log(val);this.news= val; }

    });
  }

  ngOnInit(): void {
    // this.news = this.serv.courses;
    // console.log(this.news);


      this.getStudentsData();
    }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from '../components/comments/model/Comments';
import { addpost } from '../components/model/addPost';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  constructor(private http:HttpClient) { }
    addBlog(val: addpost)
    {
     
      return this.http.post("http://localhost:8091/blog/addBlog" , val);
    }
    getBlog()
    {
     return this.http.get<addpost[]>("http://localhost:8091/blog/getBlog");
    }
    getBlogById(id :number)
    {
     return this.http.get<addpost>("http://localhost:8091/blog/getBlogById/{id}");
    }

    addComment(val: Comments)
    {
     
      return this.http.post("http://localhost:8092/comment/addComment" , val);
    }
    getComment()
    {
     return this.http.get<Comments[]>("http://localhost:8092/comment/getComment");
    }
    
    
   
}

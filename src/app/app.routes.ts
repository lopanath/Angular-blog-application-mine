import { Routes } from '@angular/router';
import { AddpostComponent } from './components/addpost/addpost.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login/login.component';
import { PostdetailComponent } from './components/postdetail/postdetail.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { authenticationGuard } from './Guard/authentication.guard';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'posts',component:PostlistComponent,canActivate:[authenticationGuard]},
    { path: 'posts/post/:id', component: PostdetailComponent},
    { path: 'comment', component: CommentsComponent},
    {
        path:'add',component:AddpostComponent,canActivate:[authenticationGuard]
    }
   
   ]
    ;

// {path:'about',component:AboutComponent},
// {path:'contact',component:ContactComponent},];

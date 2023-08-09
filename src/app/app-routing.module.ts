import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Section3Component } from './section3/section3.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { CommentComponent } from './comment/comment.component';
import { FooterComponent } from './footer/footer.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path: "section3", component:Section3Component},
  {path:'banner',component:BannerComponent},
  {path:'header',component:HeaderComponent},
  {path:'comment',component:CommentComponent},
  {path:'footer',component:FooterComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'',component:HomeComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

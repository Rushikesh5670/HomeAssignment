import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsModule } from '@angular/forms';

const route : Routes = [
  {path : '',component : WelcomeComponent},
  {path : 'products',component : ProductListComponent},
  {path : 'productForm',component : ProductFormComponent},
  {path : 'categories',component : CategoryListComponent},
  {path : 'categoryForm',component : CategoryFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductFormComponent,
    CategoryFormComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product : Product = new Product(0,"","",0,"",0,new Date(0,0,0),new Date(0,0,0),0);
  constructor(private service: ManagementServiceService, private route:Router) { }
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.service.saveProduct(this.product).subscribe(data=>{
      console.log(data)
    this.product=data;
    this.route.navigateByUrl("/products");
    })
  }

}

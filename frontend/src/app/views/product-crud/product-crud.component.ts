import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})

export class ProductCrudComponent {

  public router : Router;
  public teste : string  = "hello world";
  public counter : number = 0;

  constructor(router: Router){
    this.router = router;
  }

  navigate(route:string){
    console.log(this.router)
    this.router.navigate([route]);
  }

  addCount(){
    this.counter ++;
  }

  increaseCount(){
    this.counter --;
  }

}

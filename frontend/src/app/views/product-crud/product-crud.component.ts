import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})

export class ProductCrudComponent {

  private router : Router;
  
  public teste : string  = "hello world";
  public counter : number = 0;

  constructor(router: Router){
    this.router = router;
  }

  navigate(route:string){
    this.router.navigate([route]);
  }

  addCount(){
    this.counter ++;
  }

  increaseCount(){
    this.counter --;
  }

}

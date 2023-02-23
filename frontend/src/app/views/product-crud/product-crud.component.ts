import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})

export class ProductCrudComponent {

  private router : Router;
  
  constructor(router: Router){
    this.router = router;
  }

  ngOnInit():void{}

  navigate(route:string):void{
    this.router.navigate([route]);
  }

}

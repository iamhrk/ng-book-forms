import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent {

  onSubmit(f:any){
    console.log('you submitted value:', f);
  }
}

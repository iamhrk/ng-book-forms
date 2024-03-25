import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.css']
})
export class DemoFormSkuWithBuilderComponent {

  myForm : FormGroup;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'sku': ['ABCD123']
    });
  }

  onSubmit(value: string){
    console.log('you submitted the value', value);
  }

}

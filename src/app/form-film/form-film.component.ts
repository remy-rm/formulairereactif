import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isRequiredValidator, rangeDateValidator, } from '../form-controls.validators';
import { isIdentifier } from '@angular/compiler';
@Component({
  selector: 'app-form-film',
  templateUrl: './form-film.component.html',
  styleUrls: ['./form-film.component.scss']
})
export class FormFilmComponent {
  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    console.log('ngOnInit');    
  }


    searchForm = this.formBuilder.group({
      search: this.formBuilder.group(
        {
          identifier: [''],
          title: ['']
        },
        { validators: isRequiredValidator('identifier','title')}
      ),
      type: 'série',
      releaseYear: ['', [Validators.required, rangeDateValidator(1900, 2050)]],
      format: 'courte'
    });
  

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }
    console.log(this.searchForm.value);
  }
}
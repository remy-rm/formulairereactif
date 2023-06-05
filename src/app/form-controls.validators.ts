import { AbstractControl, FormGroup,ValidatorFn ,ValidationErrors } from "@angular/forms";

export function isRequiredValidator(
  controlName1: string,
  controlName2: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value1 = control.get(controlName1)!.value;
    const value2 = control.get(controlName2)!.value;

    let valid : boolean

    if (!value1 && !value2) {  
      valid = false;
    }else{
      valid = true;
    }

    const errors = {
      search: {
        rules: 'one field required',
      },
    };

    return !valid ? errors : null;
  };
}

  export function rangeDateValidator(minYear: number, maxYear: number) {
    return (control: any) => {
      const year = control.value;
      if (year < minYear || year > maxYear) {
        return { min: { minYear, maxYear } };
      }
      return null;
    };
  }

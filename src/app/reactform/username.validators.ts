import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class UsernameValidators{
  

   static cannotContainSpace(control : AbstractControl) : ValidationErrors | null {
       
    if (control.value != null && (control.value as string).indexOf(' ') >= 0)
           return {cannotContainSpace : true}; 
       return null;
    }

  static shouldBeUnique(arraydata:any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            for (let i=0; i<arraydata.length; i++) {
                if (control.value === arraydata[i]['username']) {
                    return {shouldBeUnique : true};
                }
            }
            return null;
        };
    }
    static emailBeUnique(arraydata:any): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            for (let i=0; i<arraydata.length; i++) {
                if (control.value === arraydata[i]['email']) {
                    return {emailBeUnique : true};
                }
            }
            return null;
        };
    }
}

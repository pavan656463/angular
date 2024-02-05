import { FormBuilder, Validators } from "@angular/forms";

export class details{
    static getdetails(fb:FormBuilder){
        return fb.group({
            username :['',Validators.required]
        })
    }
}
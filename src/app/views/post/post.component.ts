import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Category } from '../../models/category';
import { ValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    constructor(private ProductService: ProductService,
        private UserService: UserService,
        private router: Router) { }
    formdata: FormGroup;
    check: boolean;
    cate: string;
    image: any;
    ngOnInit() {
        if (localStorage.getItem('user_id') != null) {
            this.formdata = new FormGroup({
                name: new FormControl('', Validators.compose([
                    Validators.required,
                ])
                ),
                firstPrice: new FormControl('', Validators.compose([
                    Validators.required,
                ]),

                ),
                lastPrice: new FormControl('', Validators.compose([
                    Validators.required,
                ])
                ),
                stepPrice: new FormControl('', Validators.compose([
                    Validators.required,
                ])
                ),
                description: new FormControl('', Validators.compose([
                    Validators.required,
                ])
                ),
                category: new FormControl('', Validators.compose([
                    Validators.required,
                ]),
                ),
                image: new FormControl('', Validators.compose([
                    Validators.required,
                ])
                ),
                datetime: new FormControl('', Validators.compose([
                    Validators.required,
                ])
                ),

            });
            this.getCategory();
        }
        else {
            this.router.navigate(['']);
        }

    }
    category: Category[];
    getCategory() {
        this.ProductService.getCategory().subscribe(data => {
            this.category = data;
            console.log(this.category);
        });
    }
    checkPrice() {
        if (this.formdata.controls.firstPrice.value > this.formdata.controls.lastPrice.value) {
            this.check = false;
            this.formdata.controls['lastPrice'].setErrors({ 'incorrect': true });

        }
        else {
            this.check = true;

        }
    }
    onSubmit() {
        const form = {
          name: this.formdata.controls.name.value,
          category:this.formdata.controls.category.value,
          firstPrice:this.formdata.controls.firstPrice.value,
          stepPrice:this.formdata.controls.stepPrice.value,
          lastPrice:this.formdata.controls.lastPrice.value,
          description:this.formdata.controls.description.value,
          dayEnd:this.formdata.controls.datetime.value,
          image: this.image,
          idSeller: localStorage.getItem('user_id')
        }
        this.UserService.postProduct(form).subscribe(data => {
           alert(data.message);
        })
       
    }
    changeListener($event): void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.image = myReader.result;
        }
        myReader.readAsDataURL(file);
    }

}

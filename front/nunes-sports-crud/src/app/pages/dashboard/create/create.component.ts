import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Products} from "../../../shared/interfaces/products";
import {ProductsService} from "../../../services/products.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create',
  standalone: true,
    imports: [
        FormsModule,
    ],
  providers: [ProductsService, ToastrService],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  formData: Products = {} as Products;

  constructor(private productsService: ProductsService, private toastr: ToastrService) {}

  public onSubmit(form: any) {
    this.productsService.createProduct(form.value).subscribe(
      () => {
        this.toastr.success('Produto criado com sucesso!', 'Sucesso!');
      },
      () => {
        this.toastr.error('Erro ao criar produto!', 'Erro!');
      }
    );

    form.reset();
  }
}

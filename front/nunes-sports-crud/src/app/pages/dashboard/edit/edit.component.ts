import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Products} from "../../../shared/interfaces/products";
import {ProductsService} from "../../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {JsonPipe} from "@angular/common";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  providers: [ProductsService, ToastrService],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{

  formData: Products = {} as Products;
  idP: number = 0;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private toastr: ToastrService) {}

  ngOnInit() {
    this.getIdUrl();
  }

  public getIdUrl() {
    const id = this.route.snapshot.paramMap.get('id');
    this.idP = Number(id);
    this.getProductById(this.idP);
  }

  public getProductById(id: number) {
    this.productsService.getProductById(id).subscribe(
      (response: any) => {
        response.forEach((element: any) => {
          this.formData = {
            id: element.ID,
            code: element.codigo,
            name: element.nome,
            price: element.preco,
            description: element.descricao
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public onSubmit(form: any) {
    this.productsService.updateProduct(form.value, this.idP).subscribe(
      () => {
        this.toastr.success('Produto atualizado com sucesso!', 'Sucesso!');
      },
      () => {
        this.toastr.error('Erro ao atualizar produto!', 'Erro!');
      }
    );
  }
}

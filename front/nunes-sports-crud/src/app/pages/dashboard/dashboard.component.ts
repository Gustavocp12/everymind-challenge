import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {MatTableModule} from "@angular/material/table";
import {Products} from "../../shared/interfaces/products";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    providers: [ProductsService, ToastrService],
    templateUrl: './dashboard.component.html',
    imports: [
        MatTableModule,
        MatIconModule,
        MatButtonModule
    ],
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  displayedColumns: string[] = ['code', 'name', 'price', 'description', 'actions'];
  dataSource: Products[] = [];

  constructor(private productsService: ProductsService, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
      this.onProducts();
  }

  onProducts(){
      this.productsService.getProducts().subscribe(
          (response) => {
              this.dataSource = response.map((element: any) => ({
                  id: element.ID,
                  code: element.codigo,
                  name: element.nome,
                  price: element.preco,
                  description: element.descricao
              }));
          },
          (error) => {
              console.log(error);
          }
      );
  }

    onEdit(id: number) {
        this.router.navigate(['/dashboard/products/', id]);
    }

    onCreate(){
        this.router.navigate(['/dashboard/create']);
    }

    onDelete(id: number) {
        this.productsService.deleteProduct(id).subscribe(
            () => {
                this.toastr.success('Produto deletado com sucesso!', 'Sucesso!');
                this.onProducts();
            },
            () => {
                this.toastr.error('Erro ao deletar produto!', 'Erro!');
            }
        );
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
class Produto {
  nome: string;
  preco: string;
  img: string;
  categorias: string[];
  constructor() { this.nome = '', this.preco = '', this.img = '', this.categorias = [] }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  produtos: Produto[] = [
    {
      'nome': 'Calça Wide Jeans',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-1.jpg',
      'categorias': [
        'calcas', 'promocoes'
      ]
    },
    {
      'nome': 'Calça Cargo Reta',
      'preco': 'R$100,00',
      'img': '../../assets/img/featured/feature-2.jpg',
      'categorias': [
        'calcas', 'promocoes'
      ]
    },
    {
      'nome': 'Calça Pantalona',
      'preco': 'R$90,00',
      'img': '../../assets/img/featured/feature-3.jpg',
      'categorias': [
        'calcas', 'promocoes'
      ]
    },

    {
      'nome': 'Calça Mom',
      'preco': 'R$110,00',
      'img': '../../assets/img/featured/feature-4.jpg',
      'categorias': [
        'calcas', 'promocoes'
      ]
    },

    {
      'nome': 'Jaqueta Bomber',
      'preco': 'R$85,00',
      'img': '../../assets/img/featured/feature-5.jpg',
      'categorias': [
        'jaquetas', 'promocoes'
      ]
    },

    {
      'nome': 'Jaqueta Couro Eco',
      'preco': 'R$120,00',
      'img': '../../assets/img/featured/feature-6.jpg',
      'categorias': [
        'jaquetas', 'promocoes'
      ]
    },
    {
      'nome': 'Jaqueta Biker',
      'preco': 'R$90,00',
      'img': '../../assets/img/featured/feature-7.jpg',
      'categorias': [
        'jaquetas', 'promocoes'
      ]
    },
    {
      'nome': 'Parka',
      'preco': 'R$77,00',
      'img': '../../assets/img/featured/feature-8.jpg',
      'categorias': [
        'jaquetas', 'promocoes'
      ]
    },
    {
      'nome': 'Camisa Roses',
      'preco': 'R$49,90',
      'img': '../../assets/img/featured/feature-9.jpg',
      'categorias': [
        'camisas', 'promocoes'
      ]
    },

    {
      'nome': 'Camisa Ampla Manga',
      'preco': 'R$39,00',
      'img': '../../assets/img/featured/feature-10.jpg',
      'categorias': [
        'camisas', 'promocoes'
      ]
    },

    {
      'nome': 'Camisa Manga Longa',
      'preco': 'R$50,00',
      'img': '../../assets/img/featured/feature-11.jpg',
      'categorias': [
        'camisas', 'promocoes'
      ]
    },

    {
      'nome': 'Camisa Manga Sino',
      'preco': 'R$49,00',
      'img': '../../assets/img/featured/feature-12.jpg',
      'categorias': [
        'camisas', 'promocoes'
      ]
    },
    {
      'nome': 'Vestido Tule',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-13.jpg',
      'categorias': [
        'vestidos', 'promocoes'
      ]
    },
    {
      'nome': 'Vestido Midi',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-14.jpg',
      'categorias': [
        'vestidos', 'promocoes'
      ]
    },
    {
      'nome': 'Vestido Xadrez',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-15.jpg',
      'categorias': [
        'vestidos', 'promocoes'
      ]
    },

    {
      'nome': 'Vestido Poá',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-16.jpg',
      'categorias': [
        'vestidos', 'promocoes'
      ]
    },

    {
      'nome': 'Blusa Manga Curta',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-17.jpg',
      'categorias': [
        'blusas', 'promocoes'
      ]
    },

    {
      'nome': 'Blusa Stranger Things',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-18.jpg',
      'categorias': [
        'blusas', 'promocoes'
      ]
    },
    {
      'nome': 'Blusa Tie Dye',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-19.jpg',
      'categorias': [
        'blusass', 'promocoes'
      ]
    },
    {
      'nome': 'Blusa Manga Bufante',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-20.jpg',
      'categorias': [
        'blusas', 'promocoes'
      ]
    },
    {
      'nome': 'Body Verde Militar',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-21.jpg',
      'categorias': [
        'body', 'promocoes'
      ]
    },

    {
      'nome': 'Body Vermelho',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-22.jpg',
      'categorias': [
        'body', 'promocoes'
      ]
    },

    {
      'nome': 'Body Off White',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-23.jpg',
      'categorias': [
        'body', 'promocoes'
      ]
    },

    {
      'nome': 'Body Canelado',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-24.jpg',
      'categorias': [
        'body', 'promocoes'
      ]
    },
    {
      'nome': 'Short Jeans Mom',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-25.jpg',
      'categorias': [
        'shorts', 'promocoes'
      ]
    },
    {
      'nome': 'Short Jeans Azul Escuro',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-26.jpg',
      'categorias': [
        'shorts', 'promocoes'
      ]
    },
    {
      'nome': 'Short Azul Claro',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-27.jpg',
      'categorias': [
        'shorts', 'promocoes'
      ]
    },

    {
      'nome': 'Short Alfaiataria',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-28.jpg',
      'categorias': [
        'shorts', 'promocoes'
      ]
    },

    {
      'nome': 'Saia Marrom',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-29.jpg',
      'categorias': [
        'saias', 'promocoes'
      ]
    },

    {
      'nome': 'Saia Fenda Preta',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-30.jpg',
      'categorias': [
        'saias', 'promocoes'
      ]
    },
    {
      'nome': 'Saia Xadrez',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-31.jpg',
      'categorias': [
        'saias', 'promocoes'
      ]
    },
    {
      'nome': 'Saia Argola Rose',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-32.jpg',
      'categorias': [
        'saias', 'promocoes'
      ]
    },
    {
      'nome': 'Bolsa Black',
      'preco': 'R$60,00',
      'img': '../../assets/img/featured/feature-33.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },

    {
      'nome': 'Óculos',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-34.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },

    {
      'nome': 'Colar Name',
      'preco': 'R$30,00',
      'img': '../../assets/img/featured/feature-35.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },

    {
      'nome': 'Brinco',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-36.jpg',
      'categorias': [
        'calcas', 'promocoes'
      ]
    },
    {
      'nome': 'Bolsa',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-37.jpg',
      'categorias': [
        'calcas', 'promocoes'
      ]
    },
    {
      'nome': 'Bolsa',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-38.jpg',
      'categorias': [
        'calcas', 'promocoes'
      ]
    },
    {
      'nome': 'Calça',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-39.jpg',
      'categorias': [
        'calcas', 'promocoes'
      ]
    },

    {
      'nome': 'Calça',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-40.jpg',
      'categorias': [
        'calcas', 'promocoes'
      ]
    },

    {
      'nome': 'Calça',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-41.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },

    {
      'nome': 'Calça',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-42.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },
    {
      'nome': 'Calça',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-43.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },
    {
      'nome': 'Calça',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-44.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },
    {
      'nome': 'Calça',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-45.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },

    {
      'nome': 'Calça',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-46.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },

    {
      'nome': 'Brinco',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-47.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },

    {
      'nome': 'Colar',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-48.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },
    {
      'nome': 'Anel',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-49.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },
    {
      'nome': 'Anel',
      'preco': 'R$130,00',
      'img': '../../assets/img/featured/feature-50.jpg',
      'categorias': [
        'acessorios', 'promocoes'
      ]
    },
  ]
  produtosFiltrados: Produto[] = []
  categoriaID = '';


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoriaID = this.route.snapshot.paramMap.get('id') || ''
    this.setCategory(this.categoriaID)
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((e: any) => {

      if (e instanceof NavigationStart) {
        let arr = e.url.split('/')
        this.categoriaID = arr[2]
        this.setCategory(this.categoriaID)
      }
    })

  }
  setCategory(categoriaID: string): void {
    this.produtosFiltrados = this.produtos.filter((item) => {
      return item.categorias.findIndex((cat) => {
        return cat == categoriaID
      }) >= 0
    }) || []
  }

}

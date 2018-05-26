import { Component, OnInit } from '@angular/core';
import { LeitorService } from '../../services/leitor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from '../../services/livro.service';

import { Livro } from '../livro-create-update/livro';
import { BookService } from '../../services/book.service';
import { Book } from '../book/book';

@Component({
  selector: 'app-livro-create-update',
  templateUrl: './livro-create-update.component.html',
  styleUrls: ['./livro-create-update.component.scss']
})
export class LivroCreateUpdateComponent implements OnInit {

  titulo: string;
  private book: any;
  private livro: Livro = new Livro();

  constructor(private livroService: LivroService, private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    var id = this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
 
      this.titulo = id ? 'Editar Meu Livro' : 'Adicionar Livro Lido';
 
      if (!id)
        return;
 
      this.livroService.getLivro(id)
        .subscribe(
          data => this.livro = data,
          response => {});


      this.bookService.retrieveBook(id)
        .subscribe(
          data => this.book = data.volumeInfo,
          response => {});
    });

    console.log(this.book);

  }

  salvar() {
    var result;
 
    if (this.livro.id){
      result = this.livroService.updateLivro(this.livro);
    } else {
     console.log(this.book);
      result = this.livroService.saveLivro(this.livro);
    }
 
    result.subscribe(data => this.router.navigate(['/']));
  }

}

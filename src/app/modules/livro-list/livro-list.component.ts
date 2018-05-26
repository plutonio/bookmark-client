import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro-create-update/livro';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.scss']
})
export class LivroListComponent implements OnInit {

  private livros: Livro[] = [];
 
  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.livroService.getLivros()
      .subscribe(data => this.livros = data);
  }

  deleteLivro(livros) {
   // if (confirm("Você tem certeza que quer deletar o livro " + livros.titulo + "?")) {
      var index = this.livros.indexOf(livros);
      this.livros.splice(index, 1);
 
      this.livroService.deleteLivro(livros.id)
        .subscribe(null);
    //}
  }

}

import { Component, OnInit } from '@angular/core';
import { ClubeDoLivroService } from '../../services/clube-do-livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClubeDoLivro } from './clube-do-livro';

@Component({
  selector: 'app-clube-do-livro-create-update',
  templateUrl: './clube-do-livro-create-update.component.html',
  styleUrls: ['./clube-do-livro-create-update.component.scss']
})
export class ClubeDoLivroCreateUpdateComponent implements OnInit {

  titulo: string;
  private clubeDoLivro: ClubeDoLivro = new ClubeDoLivro();

  constructor(private clubeDoLivroService: ClubeDoLivroService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    var id = this.activatedRoute.params.subscribe(params => {
      var id = params['id'];

      this.titulo = id ? 'Editar Clube' : 'Criar Clube do Livro';

      if (!id)
        return;

      this.clubeDoLivroService.getClubeDoLivro(id)
        .subscribe(
          data => this.clubeDoLivro = data,
          response => {});
    });

  }

  salvar() {
    var result;

    if (this.clubeDoLivro.id){
      result = this.clubeDoLivroService.updateClubeDoLivro(this.clubeDoLivro);
    } else {
     console.log(this.clubeDoLivro);
      result = this.clubeDoLivroService.saveClubeDoLivro(this.clubeDoLivro);
    }

    result.subscribe(data => this.router.navigate(['/']));
  }

}

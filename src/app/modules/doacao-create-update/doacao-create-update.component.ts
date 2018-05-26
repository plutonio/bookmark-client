import { Component, OnInit } from '@angular/core';
import { DoacaoService } from '../../services/doacao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Doacao } from './doacao';

@Component({
  selector: 'app-doacao-create-update',
  templateUrl: './doacao-create-update.component.html',
  styleUrls: ['./doacao-create-update.component.scss']
})
export class DoacaoCreateUpdateComponent implements OnInit {

  titulo: string;
  private doacao: Doacao = new Doacao();

  constructor(private doacaoService: DoacaoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    var id = this.activatedRoute.params.subscribe(params => {
      var id = params['id'];

      this.titulo = id ? 'Doar Livro' : 'Doar Livro';

      if (!id)
        return;

      this.doacaoService.getDoacao(id)
        .subscribe(
          data => this.doacao = data,
          response => {});
    });

  }

  salvar() {
    var result;

    if (this.doacao.id){
      result = this.doacaoService.updateDoacao(this.doacao);
    } else {
     console.log(this.doacao);
      result = this.doacaoService.saveDoacao(this.doacao);
    }

    result.subscribe(data => this.router.navigate(['/']));
  }

}

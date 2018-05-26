import { Component, OnInit } from '@angular/core';
import { LeitorService } from '../../services/leitor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Leitor } from './leitor';

@Component({
  selector: 'app-leitor-create-update',
  templateUrl: './leitor-create-update.component.html',
  styleUrls: ['./leitor-create-update.component.scss']
})
export class LeitorCreateUpdateComponent implements OnInit {

  titulo: string;
  private leitor: Leitor = new Leitor();

  constructor(private leitorService: LeitorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    var id = this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
 
      this.titulo = id ? 'Editar Meus Dados' : 'Me Cadastrar';
 
      if (!id)
        return;
 
      this.leitorService.getLeitor(id)
        .subscribe(
          data => this.leitor = data,
          response => {});
    });

  }

  salvar() {
    var result;
 
    if (this.leitor.id){
      result = this.leitorService.updateLeitor(this.leitor);
    } else {
     console.log(this.leitor);
      result = this.leitorService.saveLeitor(this.leitor);
    }
 
    result.subscribe(data => this.router.navigate(['/']));
  }

}

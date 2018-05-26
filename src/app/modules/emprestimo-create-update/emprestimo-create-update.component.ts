import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../../services/emprestimo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Emprestimo } from './emprestimo';

@Component({
  selector: 'app-emprestimo-create-update',
  templateUrl: './emprestimo-create-update.component.html',
  styleUrls: ['./emprestimo-create-update.component.scss']
})
export class EmprestimoCreateUpdateComponent implements OnInit {

  titulo: string;
  private emprestimo: Emprestimo = new Emprestimo();

  constructor(private emprestimoService: EmprestimoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    var id = this.activatedRoute.params.subscribe(params => {
      var id = params['id'];

      this.titulo = id ? 'Editar Meus Dados' : 'Me Cadastrar';

      if (!id)
        return;

      this.emprestimoService.getEmprestimo(id)
        .subscribe(
          data => this.emprestimo = data,
          response => {});
    });

  }

  salvar() {
    var result;

    if (this.emprestimo.id){
      result = this.emprestimoService.updateEmprestimo(this.emprestimo);
    } else {
     console.log(this.emprestimo);
      result = this.emprestimoService.saveEmprestimo(this.emprestimo);
    }

    result.subscribe(data => this.router.navigate(['/']));
  }

}

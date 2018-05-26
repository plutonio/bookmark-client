import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  titulo: string;
  private login: Login = new Login();
  private nome: string;

  constructor(private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    localStorage.clear();
  }

  logar(email, senha) {
    var result;
    localStorage.clear();
    result = this.loginService.logar(email, senha);
      result.subscribe(data => localStorage.setItem("nome", data.nome), data => localStorage.setItem("id", data.id), this.router.navigate(['/book']));
      
      console.log(localStorage.getItem("nome"));
      console.log(localStorage.getItem("id"));
    }

}

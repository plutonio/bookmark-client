import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LeitorCreateUpdateComponent } from './modules/leitor-create-update/leitor-create-update.component';
import { SortearComponent } from './modules/sortear/sortear.component';
import { LoginComponent } from './modules/login/login.component';
import { ClubeDoLivroCreateUpdateComponent } from './modules/clube-do-livro-create-update/clube-do-livro-create-update.component';
import { EmprestimoCreateUpdateComponent } from './modules/emprestimo-create-update/emprestimo-create-update.component';
import { DoacaoCreateUpdateComponent } from './modules/doacao-create-update/doacao-create-update.component';
import { LivroCreateUpdateComponent } from './modules/livro-create-update/livro-create-update.component';
import { AppRoutingModule } from './/app-routing.module';
import { LeitorService } from './services/leitor.service';
import { SortearService } from './services/sortear.service';
import { LoginService } from './services/login.service';
import { ClubeDoLivroService } from './services/clube-do-livro.service';
import { EmprestimoService } from './services/emprestimo.service';
import { DoacaoService } from './services/doacao.service';
import { LivroService } from './services/livro.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/menu/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LivroListComponent } from './modules/livro-list/livro-list.component';
import { EmprestimoListComponent } from './modules/emprestimo-list/emprestimo-list.component';
import { DoacaoListComponent } from './modules/doacao-list/doacao-list.component';
import { ClubeDoLivroListComponent } from './modules/clube-do-livro-list/clube-do-livro-list.component';
import { BookComponent } from './modules/book/book.component';
import { BookService } from './services/book.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LeitorCreateUpdateComponent,
    SortearComponent,
    LoginComponent,
    ClubeDoLivroCreateUpdateComponent,
    NavComponent,
    HomeComponent,
    LivroCreateUpdateComponent,
    LivroListComponent,
    EmprestimoListComponent,
    EmprestimoCreateUpdateComponent,
    DoacaoCreateUpdateComponent,
    DoacaoListComponent,
    ClubeDoLivroListComponent,
    ClubeDoLivroCreateUpdateComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [LeitorService, LivroService, DoacaoService, EmprestimoService, ClubeDoLivroService, LoginService, SortearService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

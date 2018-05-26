import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {LeitorCreateUpdateComponent} from './modules/leitor-create-update/leitor-create-update.component';
import {SortearComponent} from './modules/sortear/sortear.component';
import {HomeComponent} from './components/home/home.component';
import {LivroCreateUpdateComponent} from './modules/livro-create-update/livro-create-update.component';
import {DoacaoCreateUpdateComponent} from './modules/doacao-create-update/doacao-create-update.component';
import {EmprestimoCreateUpdateComponent} from './modules/emprestimo-create-update/emprestimo-create-update.component';
import {ClubeDoLivroCreateUpdateComponent} from './modules/clube-do-livro-create-update/clube-do-livro-create-update.component';
import {LoginComponent} from './modules/login/login.component';
import {BookComponent} from './modules/book/book.component';
import { LivroListComponent } from 'src/app/modules/livro-list/livro-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: BookComponent},
  {path: 'home', component: HomeComponent},
  {path: 'leitor', component: LeitorCreateUpdateComponent},
  {path: 'leitor/:id', component: LeitorCreateUpdateComponent},
  {path: 'livro', component: LivroCreateUpdateComponent},
  {path: 'livro/:id', component: LivroCreateUpdateComponent},
  {path: 'doacao', component: DoacaoCreateUpdateComponent},
  {path: 'doacao/:id', component: DoacaoCreateUpdateComponent},
  {path: 'emprestimo', component: EmprestimoCreateUpdateComponent},
  {path: 'emprestimo/:id', component: EmprestimoCreateUpdateComponent},
  {path: 'clube-do-livro', component: ClubeDoLivroCreateUpdateComponent},
  {path: 'clube-do-livro/:id', component: ClubeDoLivroCreateUpdateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sortear', component: SortearComponent},
  {path: 'book', component: BookComponent},
  {path: 'livros', component: LivroListComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}

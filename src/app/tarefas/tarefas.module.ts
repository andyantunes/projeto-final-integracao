import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { EditarTarefasComponent } from './editar';
import { CadastrarTarefaComponent } from './cadastrar/';
import { TarefaService, TarefaConcluidaDirective } from './shared';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefasComponent,
    TarefaConcluidaDirective,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TarefaService],
})
export class TarefasModule {}

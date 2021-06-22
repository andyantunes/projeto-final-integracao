import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css'],
})
export class JogoDaVelhaComponent implements OnInit {
  constructor(private jogoService: JogoDaVelhaService) {}

  ngOnInit(): void {
    this.jogoService.inicializar();
  }

  get showInicio(): boolean {
    return this.jogoService.showInicio;
  }

  get showTabuleiro(): boolean {
    return this.jogoService.showTabuleiro;
  }

  get showFinal(): boolean {
    return this.jogoService.showFinal;
  }

  iniciarJogo(): void {
    this.jogoService.iniciarJogo();
  }

  jogar(posX: number, posY: number): void {
    this.jogoService.jogar(posX, posY);
  }

  exibirX(posX: number, posY: number): boolean {
    return this.jogoService.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean {
    return this.jogoService.exibirO(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoService.exibirVitoria(posX, posY);
  }

  get jogador(): number {
    return this.jogoService.jogador;
  }

  novoJogo(): void {
    this.jogoService.novoJogo();
  }
}

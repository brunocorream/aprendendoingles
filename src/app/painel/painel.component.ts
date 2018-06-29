import { Component, OnInit } from '@angular/core';
import { Frase } from './../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase abaixo se for capaz!';
  public resposta = '';

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

  public tentativas = 3;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    // console.log( (<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtbr === this.resposta) {
      alert('OK');

      // Trocar a pergunta da rodada
      this.rodada++;

      // Aumenta o progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      // Atualiza a frase
      this.atualizaRodada();



    } else {
        this.tentativas--;
        if(this.tentativas === 0){
          alert('Oops!');
        }

    }
  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada];
    // Limpa a resposta
    this.resposta = '';
  }
}

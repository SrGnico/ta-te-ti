import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ta-te-ti';

  symbols = ['✖️', '⭕'];
  turn = '✖️';
  win = false;
  draw = false;
  alert = '';
  trys = 0;

  WIN_POSITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  board = Array(9).fill(null);

  updateBoard(i:number){
    if(this.trys === 8){
      this.draw = true;
      this.alert = "It's a draw!"
    }
    if(!this.board[i]){
      this.printSymbol(i);
      this.checkWinner();
      this.changeTurn();
      this.trys++;
    }

  }

  printSymbol(i:number){
    this.board[i] = this.turn;
  }

  checkWinner(){
    for(let i = 0; i < this.WIN_POSITIONS.length; i++){

      const[a, b, c] = this.WIN_POSITIONS[i];

      if(
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ){
        this.win = true;
        this.alert = this.turn + ' won!'
        this.board[a] = '✅'
        this.board[b] = '✅'
        this.board[c] = '✅'
      }
    }
  }

  changeTurn(){
    this.turn === '✖️'? this.turn =  '⭕' : this.turn = '✖️';
  }

  reset(){
    this.board = Array(9).fill(null);
    this.draw = false;
    this.win = false;
    this.alert = '';
    this.trys = 0;
  }
}

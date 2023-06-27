import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})

export class HomePage {

    result: number = 0; 

    buttonNumber(numero: number)
    { 
      if(this.result == 0){
        document.getElementById('result')!.innerHTML = "";
      }
      let res = document.getElementById('result')!.innerHTML;       
      document.getElementById('result')!.innerHTML += numero;
     this.result = numero * 1;
     } 

     buttonOp(op: string){ 
      if(this.result == 0){
        document.getElementById('result')!.innerHTML = "";
      }
      let res = document.getElementById('result')!.innerHTML; 
      document.getElementById('result')!.innerHTML += op; 
    } 

    clear(){ 
      document.getElementById('result')!.innerHTML = "";
   } 

    back(): void {
       let res = document.getElementById('result')!.innerHTML;
        document.getElementById('result')!.innerHTML = res.substring(0, res.length - 1); 
      } 
      calc() {
        let res = document.getElementById('result')!.innerHTML;
        if (res) {
          let result = eval(res);
          if (typeof result === 'number') {
            this.result = result;
            document.getElementById('result')!.innerHTML = result.toString();
          }
        }
      }
      
  }
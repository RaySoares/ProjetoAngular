import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule]
})

export class HomePage {
  
  // displayValue
  displayValue = '';
  // botões da calculadora
  buttons = ['c', '( )', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0'];

  buttonClick(button: string) {
    // valor do botão e valor exibido no displayValue
    document.getElementById('displayValue')!.innerHTML += button;
  }

  cleardisplayValue() {
    // Limpa o valor exibido no displayValue
    document.getElementById('displayValue')!.innerHTML = "";
  }
  back() {
    const element = document.getElementById('displayValue');
    if (element) {
      const resultado = element.textContent!;
      element.textContent = resultado.slice(0, -1);
    }
  }

  calculateResult() {
    let resultado = document.getElementById('displayValue')!.innerHTML;
    if (resultado) {
      document.getElementById('displayValue')!.innerHTML = eval(resultado);
    }
  }
}

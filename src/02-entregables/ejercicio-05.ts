console.log("************** DELIVERABLE 05 *********************");
/*
5. Slot Machine
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!";
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".
Ejemplo de uso
class SlothMachine {
  
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
*/

console.log("Slot Machine")
class SlothMachine {
  coin: number;
  firstRuleta: boolean;
  secondRuleta: boolean;
  threeRuleta: boolean;
    constructor() {
      this.coin = 0;
    }
    random() {
      this.firstRuleta = Math.random() < 0.33;
      this.secondRuleta = Math.random() < 0.33;
      this.threeRuleta = Math.random() < 0.33;
    }
  
    play(coin) {
      this.coin += coin;
      this.random();
      if 
        (this.firstRuleta === true,
        this.secondRuleta === true,
        this.threeRuleta === true)
       {
        console.log(`Congratulations!!! You won ${this.coin}`);
        this.coin = 0;
      } else {
        console.log(`Good luck next time!!`);
      }
    }
  }
  
  const machine1 = new SlothMachine();
  machine1.play(10);
  machine1.play(10);
  machine1.play(10);
  machine1.play(10);
  machine1.play(10);
  machine1.play(10);
  machine1.play(10);
  
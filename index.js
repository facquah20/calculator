// Define variables
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let backspace = document.getElementById("backspace");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let subtract = document.getElementById("subtract");
let add = document.getElementById("add");
let equals = document.getElementById("equals");
let btn = document.getElementsByClassName("btn");

class Calculator{
    constructor(){
        this.subtract = subtract;
        this.divide = divide;
        this.add = add;
        this.multiply = multiply;
        this.display = display;
        this.btn = btn;
        this.clearBtn = clear;
        this.backspace = backspace;
        this.equal = equals;


        this.clearBtn.addEventListener("click",()=>this.clearTextFromScreen());
        this.equal.addEventListener('click',()=>this.compute(this.display.innerText));
        this.backspace.addEventListener("click",()=>this.clearOneTextFromScreen())
        this.displayTextOnScreen();
    }

    displayTextOnScreen(){

        //converts the htmlcollections to an array
        const htmlCollections = Array.from(this.btn);
        
        //displays the value of the clicked button the screen
        htmlCollections.forEach(button => {
            button.addEventListener("click",()=>{
                    display.innerText+=button.innerText;
            })
        });
    }

    clearTextFromScreen(){this.display.innerText=0;} //sets screen to 0;

    clearOneTextFromScreen(){
        const allTextInDisplay = this.display.innerText.split('');
        allTextInDisplay.pop();
        this.display.innerText = allTextInDisplay.join("");
    }

    compute(expression) {
        let result = 0;
        let operator = '+';
        let numArr = []; //stores the value of a digit
      
        for (let i = 0; i < expression.length; i++) {
          const char = expression[i]; //gets a single character
      
          /*
          the code below tests if the element in index i is a number.
          If the test is true, it is the added to the numArr
          Else the numbers in numArr are joined as a single text and then
          converted to a number
          */
          if (/[\d.]/.test(char)) {
            numArr.push(char);
          } else {
            const num = Number(numArr.join(''));
      
            switch (operator) {
              case '+':
                result += num;
                break;
              case '-':
                result -= num;
                break;
              case '×':
                result*=num;
                break;
              case '÷':
                result/=num;
                break;
            }
      
            operator = char;
            numArr = [];
          }
        }
      
        const lastNum = Number(numArr.join(''));
      
        switch (operator) {
          case '+':
            result += lastNum;
            break;
          case '-':
            result -= lastNum;
            break;
          case '×':
            result *= lastNum;
            break;
          case '÷':
            result /= lastNum;
            break;
        }
       
        //displays result;
        this.display.innerText = result;
      }
      

}

const calculator = new Calculator();


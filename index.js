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

        this.clearBtn.addEventListener("click",()=>this.clearTextFromScreen());
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

}

const calculator = new Calculator();


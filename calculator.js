//! Operators

const add = (n1, n2) => {
    return n1 + n2;
}

const subtract = (n1, n2) => {
    return n1 - n2;
}

const multiply = (n1, n2) => {
    return n1 * n2;
}

const divide = (n1, n2) => {
    return n1 / n2;
}


const operator = "suma"
// prompt("¿Que operación quieres hacer? ")
const num1 = 5
// prompt("Escribe el primer valor: ")
const num2 = 2
// prompt("Escribe el segundo valor: ")

const operate = (operator, n1, n2) => {
    op = operator.toUpperCase()

    switch (op){
        case "SUMA":
            return add(n1, n2)
            break
        case "RESTA":
            return subtract(n1, n2)
            break
        case "MULTIPLICACION":
            return multiply(n1, n2)
            break
        case "DIVISION":
            return divide(n1, n2)
            break

        default:
            return "No se escogió ninguna operación"
            break
    }
}

const btn1 = document.querySelector('#btn1')
// btn1.addEventListener('click', )

const display = document.querySelector('#display')




// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }
  
//   // METHOD 2
//   btn.onclick = alertFunction;
  
//   // METHOD 3
//   btn.addEventListener('click', alertFunction);

//   // your JavaScript file
// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);
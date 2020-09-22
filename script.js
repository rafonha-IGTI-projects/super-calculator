let globalCalc = [
    {
        id: 1,
        description: "Soma (a + b):",
        calculate: function sum(a,b) {
            return a + b;
        },
        type: "a_b"
    },
    {
        id: 2,
        description: "Substração 1 (a - b):",
        calculate: function subtract(a,b) {
            return a - b;
        },
        type: "a_b"
    },
    {
        id: 3,
        description: "Substração 2 (b - a):",
        calculate: function subtract(a,b) {
            return a - b;
        },
        type: "b_a"
    },
    {
        id: 4,
        description: "Multiplicação (a x b):",
        calculate: function multiplication(a,b) {
            return a * b;
        },
        type: "a_b"
    },
    {
        id: 5,
        description: "Divisão 1 (a / b):",
        calculate: function division(a,b) {
            return a / b;
        },
        type: "a_b"
    },
    {
        id: 6,
        description: "Divisão 2 (b / a):",
        calculate: function division(a,b) {
            return a / b;
        },
        type: "b_a"
    },
    {
        id: 7,
        description: "Quadrado de a (a²):",
        calculate: function square(a) {
            return a * a;
        },
        type: "a"
    },
    {
        id: 8,
        description: "Quadrado de b (b²):",
        calculate: function square(b) {
            return b * b;
        },
        type: "b"
    },
    {
        id: 9,
        description: "Divisores inteiros de a:",
        calculate: function divisionInt(a) {
            return divisionIntFrom(a);
        },
        type: "a"
    },
    {
        id: 10,
        description: "Divisores inteiros de b:",
        calculate: function divisionInt(b) {
            return divisionIntFrom(b);
        },
        type: "b"
    },
    {
        id: 11,
        description: "Fatorial de a (a!):",
        calculate: function factorial(a) {
            return getFactorial(a);
        },
        type: "a"
    },
    {
        id: 12,
        description: "Fatorial de b (b!):",
        calculate: function factorial(b) {
            return getFactorial(b);
        },
        type: "b"
    }
]

let numberA = document.getElementById("numberA");
let numberB = document.getElementById("numberB");

function start() {

    numberA.addEventListener("input", handleChangeInputA);
    numberB.addEventListener("input", handleChangeInputB);

    calculate();
}

function handleChangeInputA() {
calculate();
}

function handleChangeInputB() {
calculate();
}

function calculate() {
    var a = parseInt(numberA.value);
    var b = parseInt(numberB.value);

    var divCalculations = document.querySelector("#calculations");

    var innerCalculations = document.createElement("div");
    innerCalculations.classList.add("row");

    for (var i = 0; i < globalCalc.length; i++) {
        var currentCalculation = globalCalc[i];

        var id = "input_" + currentCalculation.id;

        var value = getCalculationFrom(
          currentCalculation.type,
          currentCalculation.calculate,
          a,
          b
        );
    
        var div = getMaterializeDiv();
        var input = getMaterializeInput(id, value);
        var label = getMaterializeLabel(id, currentCalculation.description);

        div.appendChild(input);
        div.appendChild(label);
        innerCalculations.appendChild(div);
    }

    divCalculations.innerHTML = "";
    divCalculations.appendChild(innerCalculations);
}

function getMaterializeDiv() {
    var div = document.createElement("div");
    div.classList.add("input-field", "col", "s12", "m6", "l4");
  
    return div;
}

function getMaterializeInput(id, value) {
    var input = document.createElement("input");
    input.readOnly = true;
    input.type = "text";
    input.id = id;
    input.value = value;
  
    return input;
}

function getMaterializeLabel(id, description) {
    var label = document.createElement("label");
    label.for = id;
    label.textContent = description;
    label.classList.add("active");
  
    return label;
}

function divisionIntFrom(number) {

    let divisionIntTotal = 0;
    let divisionInt = []; 

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            divisionInt.push(i);
            divisionIntTotal++;
        }
    }

    return divisionInt + " (" + divisionIntTotal + ")";
}

function getFactorial(number) {
    if (number >= 20) {
        return 'Number too big!'
    }

    let factorial = 1;

    for (var i = number; i > 1; i--) {
        factorial *= i;
    }

    return parseInt(factorial);
}


function getCalculationFrom(type, calculationFunction, a, b) {
    var value = "";
  
    switch (type) {
      case "a":
        value = calculationFunction(a);
        break;
  
      case "b":
        value = calculationFunction(b);
        break;
  
      case "a_b":
        value = calculationFunction(a, b);
        break;
  
      case "b_a":
        value = calculationFunction(b, a);
        break;
  
      default:
        value = "Cálculo não identificado.";
    }
  
    return value;
}

start();
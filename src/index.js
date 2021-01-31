function eval() {
    // Do not use eval!!!
    return;
}

function checkNumber(n) {
    if(n === 0) {
        throw new Error("TypeError: Division by zero.");
    }
}

function calculate(arr, i, a, op, b) {
    switch (op) {
        case "+": arr.splice(i-1,3,a+b);
        break;
        case "-": arr.splice(i-1,3,a-b);
        break;
        case "*": arr.splice(i-1,3,a*b);
        break;
        case "/": checkNumber(b) || arr.splice(i-1,3,a/b);;
        break;
    }
}

function lastAction(arr) {
    for(let i=1; i<arr.length; i++){
        calculate(arr, i, +arr[i-1], arr[i], +arr[i+1])
        i--;
    }
}

function multiplyDivide(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === '/' || arr[i] === "*"){        
            calculate(arr, i, +arr[i-1], arr[i], +arr[i+1])
            i--;
        }
    }
}

function checkNumber(n) {
    if(n === 0) {
        throw new Error("TypeError: Division by zero.");
    }
}

function calculate(arr, i, a, op, b) {
    switch (op) {
        case "+": arr.splice(i-1,3,a+b);
        break;
        case "-": arr.splice(i-1,3,a-b);
        break;
        case "*": arr.splice(i-1,3,a*b);
        break;
        case "/": checkNumber(b) || arr.splice(i-1,3,a/b);;
        break;
    }
}

function lastAction(data) {
    let arr = data.slice(0);
    for(let i=1; i<arr.length; i++){
        calculate(arr, i, +arr[i-1], arr[i], +arr[i+1])
        i--;
    }
    return arr;
}

function multiplyDivide(data) {
    let arr = data.slice(0);
    for(let i=0; i<arr.length; i++){
        if(arr[i] === '/' || arr[i] === "*"){        
            calculate(arr, i, +arr[i-1], arr[i], +arr[i+1])
            i--;
        }
    }
    return arr;
}


function createExpr(data) {
    let arr = data.slice(0);
    for(let i=0; i<arr.length; i++){
        if(isFinite(arr[i]) && isFinite(arr[i+1])) {
            arr.splice(i,2,(arr[i]+arr[i+1]));
            i--;
        }
    }
    return arr;
}

function checkBreaks(arr) {
    let leftBreak = 0;
    let rightBreak = 0;
    arr.forEach(e => {
        if (e === '(') {
            leftBreak++;
        } else if (e === ')') {
            rightBreak++;
        }
    })
    if (leftBreak !== rightBreak) {
        throw "ExpressionError: Brackets must be paired";
    }
}

function findRange(arr) {
    let startBreak = 0;
    let endBreak = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            startBreak = i;
        } else if (arr[i] === ')') {
            endBreak = i;
            i = arr.length;
        }
    }
    return [startBreak, endBreak];
}

function findSolution(arr) {
    while(arr.includes('(')) {
        let [startBreak, endBreak] = findRange(arr);
        let expr = arr.slice(startBreak+1, endBreak);
        let length = expr.length;
        expr = multiplyDivide(expr);
        expr = lastAction(expr);
        arr.splice(startBreak, length+2, expr[0]);
    }
}

function expressionCalculator(str) {
    let arr = str.split('').filter(n => n !== ' ');
    arr = createExpr(arr);
    checkBreaks(arr);
    findSolution(arr);
    arr = multiplyDivide(arr);
    arr = lastAction(arr);
    console.log(arr[0])
    return arr[0];
}

module.exports = {
    expressionCalculator
}

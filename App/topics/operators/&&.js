//&&

console.log(5 && 0); // 0
console.log(5 && 1); // 1
console.log(0 && 1); // 0 потому что && возвращает первое значение если оно false
console.log(false && 0); // false
console.log(5 && 6); // 6
console.log(5 && 6 && 7); // 7 потому что  && возвращает последнее значение если все значения true
console.log("tetx" && "text2"); // text2
console.log("tetx" && ""); // "" потому что && возвращает первое значение если оно false а пустая строка false
console.log("tetx" && null); // null потому что && возвращает первое значение если оно false а null false
console.log("tetx" && undefined); // undefined потому что && возвращает первое значение если оно false а undefined false
console.log("tetx" && NaN); // NaN потому что && возвращает первое значение если оно false а NaN false
console.log("tetx" && 0); // 0 потому что && возвращает первое значение если оно false а 0 false
console.log("tetx" && 1); // 1 потому что && возвращает последнее значение если все значения true



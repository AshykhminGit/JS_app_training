
//Задача/ Трое друзей  решили пообедать Каждый хочет по гамабургеру и только вы хотите картошку фри

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const hamburger = 3;
const franchise = 1; 
const cola = 1;


if (hamburger  === 3 && cola ===1 && franchise ===1) {
    console.log('Тут есть и гамбургеры для всех и картошка фри мне, и кола есть и   я наемся здесь и выпью колы');
    console.log(hamburger && franchise);
}
else if (hamburger === 3  && cola === 0 && franchise === 0) {
    console.log('Тут есть гамбургеры для всех, но нет картошки фри  и колы нет, я не наемся здесь и не выпью колы');
    console.log(hamburger && !franchise);

}
else if (hamburger === 2 && cola === 0 && franchise === 1) {
    console.log('Тут нет гамбургера для меня, но есть картошка фри, но колы нет я не наемся здесь и не выпью колы');
    console.log(!hamburger && franchise);
}
else if (hamburger === 0 && cola === 0 && franchise === 0) {
    console.log('Тут нет ни гамбургера, ни картошки фри,  и колы нет  я не наемся здесь и не выпью колы, уходим');
    console.log(!hamburger && !franchise && !cola);
}
else if (hamburger === 0 && cola === 1 && franchise === 0) {
    console.log('Тут нет ни гамбургера, ни картошки фри,  но кола есть  я не наемся здесь но   выпью   колы');
}
else {
    console.log('все остальные варианты');
    
}
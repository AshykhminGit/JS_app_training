const hamburger = 1;
const franchise = 1;  // 1 - true, 0 - false // null - false, undefined - false, NaN - false, '' - false, 0 - false 
//1 true  Это преобразование называется приведением типов.
//работает так: если в условии if стоит переменная, то она преобразуется в булевое значение
//если переменная содержит 0, пустую строку, null, undefined, NaN, то она преобразуется в false
//все остальное преобразуется в true
//поэтому в данном случае переменные преобразуются в true
//поэтому в консоль выведется первый console.log
//второй console.log не выполнится
//также в консоль выведется true  так как оба значения true и оператор && возвращает true если оба значения true
//если хотя бы одно значение false, то оператор && возвращает false
//поэтому в данном случае в консоль выведется true


if (hamburger && franchise) {
    console.log('Тут есть и гамбургер и картошка фри, и  я наемся здесь');
    console.log(hamburger && franchise);
}
else if (hamburger && !franchise) {
    console.log('Тут есть гамбургер, но нет картошки фри, я не наемся здесь');
    console.log(hamburger && !franchise);

}
else if (!hamburger && franchise) {
    console.log('Тут нет гамбургера, но есть картошка фри, я не наемся здесь');
    console.log(!hamburger && franchise);
}
else {
    console.log('Тут нет ни гамбургера, ни картошки фри, я не наемся здесь');
    console.log(!hamburger && !franchise);
}



//if  нужен для того чтобы проверить условие и если оно верно, то выполнить код внутри блока if
//иначе выполнить код внутри блока else
//if может быть без else
//else может быть без if
//if и else могут быть вложенными друг в друга
//if может быть вложен в else

const hamburger = true;
const franchise = true; 


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

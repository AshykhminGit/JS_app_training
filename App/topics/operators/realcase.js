//четыре отчета от разных людей

let johnReport, samReport, mikeReport, annReport = "Done";

console.log(johnReport, samReport, mikeReport, annReport); // undefined undefined undefined Done потому что  не все переменные определены

console.log(johnReport || samReport || mikeReport || annReport); // Done  потому что || возвращает первое значение true

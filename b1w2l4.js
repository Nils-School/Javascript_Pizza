alert(' Hallo Rompie');  
var small = prompt('Hoeveel small pizzas wilt u? ')
var medium = prompt('Hoeveel medium pizzas wilt u?')
var large = prompt('Hoeveel large pizzas wilt u?')
 
var def = parseInt(small)*3;
var defm= parseInt(medium)*5;
var defl= parseInt(large)*7;

document.write('Prijs voor '+small+' x €s3,00 small pizza= €'+ def + '<br/>')
document.write('Prijs voor '+medium+' x €5,00 medium pizza= €'+ defm + '<br/>')
document.write('Prijs voor '+large+' x €7,00 large pizza= €'+ defl + '<br/>')
document.write('Totale prijs= €'+ (def+defm+defl))




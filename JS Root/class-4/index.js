var today = new Date();

var d = today.getDay();
console.log(d);
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if (dd<10) {
    dd = '0' + dd;
}

if (mm<10) {
    mm = '0' + mm;
}

console.log(dd,mm,yyyy);
console.log(mm,dd,yyyy);


var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

var dayname = daylist[d];

// console.log(dayname);

// function printDay(){
//     window.print();
// }

var side1=5;
var side2=6;
var side3=7;

var s = (side1 + side2 + side3) / 2;

var area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));

console.log(area);

function animation_leftToRight(){
    var element = document.getElementById("dipto-leftToRight");
    console.log(element);
    var text = element.childNodes[0];
    var tx = text.data;
    console.log(tx);
    setInterval(
        function(){
            tx = tx[tx.length-1] + tx.substring(0,tx.length-1);
            text.data=tx;
        },200
    );
    
}


function leapYear(yyyy){
    return (yyyy % 4 == 0 && yyyy % 100 != 0) || (yyyy % 400 == 0);
}


console.log(leapYear(2015));


console.log('----------------------------------------------------------');

for (var year=2000; year<=2050; year++){

    // year = 2000; month = 4; date = 8;
    var d =new Date(year,4,8);

    // day index 0-6 (0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday)
    if(d.getDay() == 6){
        console.log("8 may is Saturday in year " + year);
    }

}
console.log('----------------------------------------------------------');
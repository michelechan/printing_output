
//TASK ONE
var ouput, a, b, c;

a = 3;
b = 5;

output = "var a = 3;\nvar b = 5;\nvar c;\n------------\n"+
         "a + b = " + (a + b) + "\n"+
         "a - b = " + (a - b) + "\n"+
         "a * b = " + (a * b) + "\n"+
         "a / b = " + (a / b) + "\n"+
         "a % b = " + (a % b) + "\n"+
         "(a += b) : " + (a += b) + "\n"+
         "(a -= b) : " + (a -= b) + "\n"+
         "(a *= b) : " + (a *= b) + "\n"+
         "(a /= b) : " + (a /= b) + "\n"+
         "(a %= b) : " + (a %= b) + "\n"+
         "(a == b) : " + (a == b) + "\n"+
         "(a != b) : " + (a != b) + "\n"+
         "(a > b) : " + (a > b) + "\n"+
         "(a < b) : " + (a < b) + "\n"+
         "(!a && !c) : " + (!a && !c) + "\n"+
         "(!a || !c) : " + (!a || !c) + "\n";
    
alert(output);


//TASK TWO
var first_name, last_name, email, output;

first_name = "Muzhen";
last_name = "Chen";
email = "chen0626@algonquinlive.com";

output = "My name is " + first_name + " " + last_name + "." + "\n" +
         "You can contact me at " + email + ".";

alert(output);


//TASK THREE
let numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

var i, j, sum;

i =  Math.floor(Math.random() * (200 - 100) + 100);

j =  Math.floor(Math.random() * (200 - 100) + 100);

sum = numbers[0] + numbers[4];

output = i + " " + "+" + " " + j + " " + "=" + " " + sum + "\n";

if (sum % 2 === 0 ){
    alert(output + "\n" + "This is an even number.");
}else{
    alert(output + "\n" +"This is an odd number.");
}




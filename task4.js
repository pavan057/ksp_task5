//variables
let num1=2;
let num2=3;
console.log(num1);
console.log(num2);
//text
let name="pavan";
let name1="r";
let name3=8.5;
let name4=66;
console.log(name1);
console.log(name3);
console.log(name4);

//var let const->constant can't be changed
 
const num3=33;
console.log(num3);

//data types

let num_1=22;//integer
let num_2=23.3;//float
let num_3="career";//string
let num_4="J";//char
let bool=true;//boolean

//arithematic operater 
let no_1=4;
let no_2=2;
console.log(no_1+no_2);
console.log(no_1-no_2);
console.log(no_1*no_2);
console.log(no_1**no_2);
console.log(no_1/no_2);
console.log(no_1%no_2);

//assgnment operater

no_1+=3;
console.log(no_1);
no_1-=3;
console.log(no_1);
no_1**=3;
console.log(no_1);
no_1*=3;
console.log(no_1);
no_1%=3;
console.log(no_1);

//comparision operater
let dig1=32;
let dig2=34;
console.log(dig1==dig2);//compare bitween the two variables
console.log(dig1===dig2);//it compare bitween the variables and datatype
console.log(dig1!=dig2);
console.log(dig1<dig2);
console.log(dig1>dig2);
console.log(dig1<=dig2);
console.log(dig1>=dig2);

//logical operater

console.log(dig1<10 && dig2==34);
console.log(dig1<10 || dig2==34);
console.log(!(dig1<10 && dig2==34));//not operater if T-->F or F-->T

//functions in JS

function add(n1,n2){
    console.log(n1+n2);
}
function sub(n1,n2){
    console.log(n1-n2);
}
function mul(n1,n2){
    console.log(n1*n2);
}
function pow(n1,n2){
    console.log(n1**n2);
}
add(2,3);
sub(5,2);
mul(3,6);
pow(3,3);

//if else

let n=1;
if(n>0){
    console.log("positive");
}
else{
    console.log("zero");
}

//for loop

let i;
for(i= 0; i< 10; i++) {
  console.log(i);
}
//while loop
let k = 0;
while(k <10) 
{
  console.log(k);
  k++
}
//break
let j;
for (j = 0; j < 10; j++) 
{
    console.log(j);
    if (j == 5) 
    {
      break;
    }
}










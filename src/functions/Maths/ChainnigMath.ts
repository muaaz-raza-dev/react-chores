let MathOperations = {add,subtract,multiply,divide,result,power,factorial,isDivisibleby}
let total = 1
function Operations(number:number=1) {
total =number
return MathOperations
}
function result(){
  return total
}
function add(num:(number|number[])) {
     if(typeof num =="number")total+=num
     else total+=num.reduce((acc,elm)=>acc+elm)
    return MathOperations
}
function subtract(num:number|number[]) {
     if(typeof num =="number") total-=num
     else total-=num.reduce((acc,elm)=>acc+elm)
   return MathOperations
    
}
function multiply(number:number) {
    total*=number
   return MathOperations
    
}
function divide(number:number) {
    total/=number
   return MathOperations
    
}
function power(number:number){
  if(typeof number=="number")total**=number
  return MathOperations
}

function isDivisibleby(number:number){
return  (total/number).toLocaleString().split(".").length==1
}
function factorial(number:number){
if(number>0){
let factorial:number=1;
for (let i=1; i<=number;i++){
  factorial*=i
}
total*=factorial
return MathOperations
}
else return MathOperations}

export {Operations}
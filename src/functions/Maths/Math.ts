import { NestedtoLinearArray } from "../Array"
import { PercentageType } from "../Types/Imath"
const Average = (...numbers:(number[]|number)[]) => {
let Numbers :number[] = NestedtoLinearArray(numbers)
let Average =Numbers.reduce((acc:number,elm:number)=>{
    return acc+elm
})/Numbers.length
return Average
}

const GenerateRandomNumber = (digits?:number,start?:number,end?:number) => {
    let min = start??0
    let max = end??100
    let random:number ;
    if(digits&&!start&&!end) random =+Math.random().toLocaleString().split(".").join("").slice(0,digits)
    else random=Math.random()*(max-min)+min
    return Math.round(random)
}

const Percentage = (Params: PercentageType) => {
    if (Params.mode=="percent")return (Params.amount/Params.total)*100
  if (Params.mode=="amount")return Params.total*(Params.percent/100)
  if (Params.mode=="total")return Params.amount/Params.percent*100
  }




export {Average ,GenerateRandomNumber,Percentage}

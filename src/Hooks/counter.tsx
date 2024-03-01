import { useState } from 'react'

const useCounter = () => {
const [count, setCount] = useState<number>(0);
const increment = (number?:number)=>{
    setCount(count+(number??1))
}
const decrement = (number?:number)=>{
    setCount(count>0?count-(number??1):0)
}
return {count,increment,decrement}
}

export {useCounter}
import { useEffect, useRef } from "react"


const useUpdateEffect = ({callback,dependency}:{callback:()=>any,dependency:any[]}) => {
let Render = useRef (true)
useEffect(() => {
if(Render.current){
    Render.current=false
    return 
} 
else{
    return callback()
}
},dependency);
}

export default useUpdateEffect

import { useEffect, useState } from 'react'
const useActiveRoute = () => {
const [ActiveRoute, setActiveRoute] = useState(location.pathname);
useEffect(() => {
    setActiveRoute(location.pathname)
}, [location.pathname]);
    const ValidateRoute = ({toCompare,classesToApply}:{toCompare:string,classesToApply:string}) => {
        let Route = location.pathname
        if(toCompare.includes("/")){
  return Route ==toCompare?classesToApply:""
        }
        else{
             (Route.split("/").some(elm=>toCompare==elm)) ? classesToApply:""
        }
    }

return {ValidateRoute,ActiveRoute}
}
export {useActiveRoute}

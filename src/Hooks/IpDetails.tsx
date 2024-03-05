import { useState } from "react";

 function useGetIpDetails () {
    const [Ip, setIp] = useState<number>(0);
    const [Location, setLocation] = useState<{country:string,city:string,coordinates:string,postal:number,region:string,ip:number}>({country:"",city:"",coordinates:"",region:"",postal:0,ip:2});
    const [Loading, setLoading] = useState(false);
    const [Error,setError] = useState({isError:false,ErrorMessage:""})
    async function GetLocation (){
        setLoading(true)
        try {
            let res = await fetch("https://api.ipify.org?format=json")
            let result:{ip:string} =await res.json()
            let GeoLocation = await (await fetch(`https://ipinfo.io/${result.ip}/geo`)).json()
            setLocation({country:GeoLocation.country||"",city:GeoLocation.city||"",coordinates:GeoLocation.loc||"",region:GeoLocation.region,postal:GeoLocation.postal,ip:GeoLocation.ip})
            setIp(GeoLocation.ip)
        } catch (error) {
            setError({...Error,isError:true,})
        }
        finally{
            setLoading(false)
        }
    }
    return {GetLocation,Location,Ip,Loading,Error}
}
export {useGetIpDetails}
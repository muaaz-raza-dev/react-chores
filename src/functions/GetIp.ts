export async function GetIp () {
    let res = await fetch("https://api.ipify.org?format=json")
    let result:{ip:string} =await res.json()
    return result.ip
}
import { useEffect, useState } from "react";

const useClipboard = () => {
const [appClipboard, setAppClipboard] = useState<string[]>([]);
const [isError, setError] = useState(false);
const [isCopied, setisCopied] = useState(false);
useEffect(() => {
    setAppClipboard(JSON.parse(sessionStorage.getItem("react-simpler-clipboard")??""))
}, [sessionStorage]);

function copyToClipboard(text:string) {
        setisCopied(false)
        setError(false)
    navigator.clipboard.writeText(text).then(data=>{
        setisCopied(true)
        sessionStorage.setItem("react-simpler-clipboard",JSON.stringify([...appClipboard,text]))
       }).catch(()=>{
           setError(true)
           console.error('Failed to copy text to clipboard:');
       })
}
return {appClipboard,isError,isCopied,copyToClipboard}
}

export default useClipboard

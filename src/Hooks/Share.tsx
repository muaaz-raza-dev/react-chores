import { useState } from "react";

const useShare = () => {
    const [error, setError] = useState({error:false,errorMessage:""});
      function Share({
        url,
        title,
        description,
      }: {
        url?: string;
        title?: string;
        description?: string;
      }) {
  if ("share" in navigator) {
      navigator.share({
          url:url||location.toString(),title,text:description,
      }).then(()=>{
      }).catch((err)=>{
  setError({error:true,errorMessage:err.toString()})
      })
  }
  else{
  setError({error:true,errorMessage:"useShare feature is not available in your device"})
  }
      }
  return {Share,error,isError:error.error}
  };
  
  export  {useShare};

import {useState,useEffect} from "react"
function useTrackChanges  <T>(stateToCompare:T) {
  const [InititalState, setInititalState] = useState<any>(null);
  let changes:boolean;
  useEffect(() => {
    if (InititalState==null) {
        setInititalState(stateToCompare)
    }
  }, []);
if (JSON.stringify(InititalState)==JSON.stringify(stateToCompare)) {
    changes=false
}
else{
    changes=true
}
let UpdateState = (updatedState:any)=>{
  setInititalState(updatedState)
}

return {changes , UpdateState }  //! ChangeInitialstate to set the updated state which will use in tracking
}

export  {useTrackChanges}

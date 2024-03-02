import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";

interface FormState<T extends Record<string, any>> {
  initialState: T;
  validationRule: {
    [K in keyof T]: {
      required: boolean;
      minLength?: number;
      maxLength?: number;
    };
  };
  onSubmit: (values: T) => void;
}
function useFormHandler<T extends Record<string, any>>({
  initialState,
  validationRule,
  onSubmit,
}: FormState<T>) {
  const [FormState, setFormState] = useState(initialState);
  const [Error, setError] = useState({ error: false, message: "" });
  let handleChange =useCallback( (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(
      (prevState=>{
      return { ...prevState, [e.target.name]: e.target.value };
    }))
  },[FormState]);

  const Validate=useCallback(()=> {
    Object.keys(initialState ?? {}).map((elm) => {
      let minLn = validationRule[elm].minLength ?? null;
      let maxLn = validationRule[elm].maxLength ?? null;
      if (elm in validationRule) {
        if (FormState[elm] == "")
          setError({ error: true, message: `${elm} field is required` });
        if (minLn && initialState[elm].length < minLn)
          setError({
            error: true,
            message: `${elm} alteast contain ${minLn} characters`,
          });
        if (maxLn && initialState[elm].length > maxLn)
          setError({
            error: true,
            message: `${elm} can only contain max ${maxLn} characters`,
          });
      }
    });
  },[FormState,initialState,validationRule])

  const  Sumbit=useCallback((e:FormEvent) =>{
e.preventDefault()
Validate()
if (!Error.error) {
  onSubmit(FormState)
  }
  },[FormState,Error.error])
    // Memoize the state and handlers
    const memoizedStateAndHandlers = useMemo(
      () => ({
        handleChange,
        Error,
        FormState,
     Sumbit
      }),
      [Error, FormState, handleChange,Sumbit]
    );
  
    return memoizedStateAndHandlers;
}

export {useFormHandler};

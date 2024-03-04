
# React-Simpler

React Simpler is a React library designed to make small, repetitive tasks easier. It simplifies common actions in React web applications . 
It provides variety of hooks and functions .


## Hooks

 - useCounter
 - useFormHandler
 - useTrackChanges
 - usePagination

## Installation

Install react-simpler with npm

```bash
  npm install react-simpler
```
    
## useCounter

```javascript
import {useCounter} from 'react-simpler'

function App() {
    let {count, increment,decrement}=useCounter()
  return( <div>
  <h1>{counter}</h1> //counter: 1,2,...
  <button onClick={()=>increment(1)}>+</button> //increment by 1 or any number ou want
  <button onClick={()=>increment(1)}>+</button> //decrement by 1 or any number ou want
  <div/>)
}
```


## Support

For support, email yourssharky@gmail.com or join our Slack channel.


## usePagination

```javascript
import usePagination from './usePagination';

function App() {
   let {NumberofPages,ActivePage,ToPage,Next,Previous,isNext,isPrevious}=usePagination(12,3)
  
  return (
   <main>
   <div className="">
    {/* Your content */}
   </div>
   <div className="flex">
    {isPrevious&&
<div className="Previous" onClick={()=>Previous()} >Previous</div>
    }
{
  NumberofPages.map((page)=>{
    return <button className={` ${page==ActivePage&&"border-2  border-red-400"} outline-none  p-2 text-xs font-bold`} onClick={()=>ToPage(page)}>{page}</button>
  })
}

{
  isNext&&
<div className="Next" onClick={()=>Next()}>Next</div>
}

  </div>
   </main>
  )

}


```
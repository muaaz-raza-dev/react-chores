
# React-Simpler

React Simpler is a React library designed to make small, repetitive tasks easier. It simplifies common actions in React web applications . 
It provides variety of hooks and functions .


## Installation

Install react-simpler with npm

```bash
  npm install react-simpler
```
    
## Hooks

 - useCounter
 - useFormHandler
 - useTrackChanges
 - usePagination
 - useActiveRoute
 - useGetIpDetails
 - useGeoLocation
 - useShare
 - useClipboard
## Functions
- NestedtoLinearArray()
- GetAverage()
- GenerateRandomNumber()
- GetPercentage()
## Chain Math Functions
#### MathOperation()
- add()
- subtract()
- divide()
- multiply()
- power()
- factorial()
- isDivisibleBy()

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

# useActiveRoute

`useActiveRoute` is a custom React hook that allows you to manage and track the active route in your React application.

# Usage/Example
```javascript
import React from 'react';
import useActiveRoute from 'use-active-route';

function MyComponent() {
  const { activeRoute, validateRoute } = useActiveRoute();

  return (
    <div>
      <p>Current active route: {activeRoute}</p>
      <ul>
        <li className={validateRoute({ toCompare: '/', classesToApply: 'active' })}><a href="/">Home</a></li>
        <li className={validateRoute({ toCompare: '/about', classesToApply: 'active' })}><a href="/about">About</a></li>
        <li className={validateRoute({ toCompare: '/contact', classesToApply: 'active' })}><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default MyComponent;

```
# API 
`useActiveRoute()`

Returns an object containing the following properties:
- `activeRoute`: A string representing the current active route.
- `validateRoute ({ toCompare: string, classesToApply: string })`: string: A function that takes an object with toCompare and classesToApply properties and returns a string representing the classes to apply based on the current route.


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
# useShare

`useShare` is a custom React hook that provides a simple interface for sharing content using the Web Share API.

# Usage/Example

To use the useShare hook, import it into your React component:
```javascript 
import React from 'react';
import useShare from 'use-share';

function MyComponent() {
  const { share, error, isError } = useShare();

  const handleShare = () => {
    share({
      url: 'https://example.com',
      title: 'Example Website',
      text: 'Check out this example website!',
    });
  };

  return (
    <div>
      <button onClick={handleShare}>Share</button>
      {isError && <p>Error: {error.errorMessage}</p>}
    </div>
  );
}

export default MyComponent;

```
In the example above, `share` is a function used to share content using the Web Share API. It takes an object with optional `url`, `title`, and `text` properties. The error object contains information about any errors that occur during sharing, and `isError` is a boolean flag indicating whether an error has occurred.


# API
`useShare()`
Returns an object containing the following properties:

- share({ url?: string, title?: string, text?: string }): void: A function that shares content using the Web Share API. It takes an object with optional url, title, and text properties.
- error: { error: boolean, errorMessage: string }: An object containing information about any errors that occur during sharing. It has error and errorMessage properties.
- isError: boolean: A boolean flag indicating whether an error has occurred during sharing.
# Compatibility
The Web Share API is supported in modern browsers on various platforms, including Android, iOS, Windows, macOS, and Linux. However, support may vary depending on the browser and device.
## Support

For support, email yourssharky@gmail.com or join our Slack channel.


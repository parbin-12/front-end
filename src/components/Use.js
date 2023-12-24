
/*import { useState, createContext, useContext } from "react"
const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>Hello {user}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>Hello ${user}</h2>
    </>
  );
}
export default Component1*/

import { useState,useEffect,useRef } from "react";
const App=()=>{
    const [inputValue,setInputValue]=useState('');
    const count=useRef(0);
    useEffect(()=>{
count.current=count.current+1;
    })
    return(
        <>

        <input type='text' value={inputValue}/>
onchange{(e)=>setInputValue(e.target.value)
}
<h1>render count:{count.current}</h1>
        </>
    )
}
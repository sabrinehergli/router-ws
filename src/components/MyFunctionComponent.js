import React,{useState,useEffect} from "react";
const MyFunctionComponent = () => {
    // setting the state hooks

    const [name, setName] = useState("Arya Stark");
    useEffect(() => {
      alert('hello everyone')
    },[name])
    const HandleClick=()=>{
       setName('Sabrine')
    }
    return (
      <div>
        <p>hello my name is {name}</p>
        <button onClick={HandleClick}>click me</button>
      </div>
    );
   };

   export default MyFunctionComponent;
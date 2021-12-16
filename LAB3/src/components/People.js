import React,{ useState } from "react";

function People(){
    const [color, setColor] = useState("red");

    const people ={
    name:"golf",
    age:25,
    };

    const numbers = [10, 20, 30];
    const text = (
      <>
    <div>Hello World !!! React {numbers[0]+numbers[2]}</div>
    <h3 className= "red">My name is Tanakorn</h3>
    </>
    );

    const multiNum = (num) => {
        console.log(num); 
    };

    return (
        <>
            <p>My name is {people.name} </p>
            <p>I love {color}</p>
            <button onClick={()=>{setColor("blue");}}>Change</button>
            {text}
            <button onClick={multiNum(5)}>MULTI</button>
        </>
    );
}

export default People;
import { useEffect, useState } from "react"

let UseEffect = () => {

    const [tick, setTick] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${tick} times`;
    });

    return (
        <div>
            <h1>Use Effect Example</h1>
            <button onClick={()=>{setTick(tick+1)}}>Click Me</button>
            <p>Tick Count: {tick} (Use State used!)</p>
        </div>
    );

}


export default UseEffect;
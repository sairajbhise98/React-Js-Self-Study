import { useState } from "react"

let UseState = () => {
    const [tick, setTick] = useState(0);

    return (
        <div>
            <h1>Use State Example</h1>
            <button onClick={()=>{setTick(tick+1)}}>Click Me</button>
            <p>Click Count: {tick}</p>
        </div>
    );
}


export default UseState;
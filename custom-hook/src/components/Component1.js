import { useState } from "react";
import useCustomHook from './useCustomHook'

const Component1 = () =>{
    const [data, setData] = useState(0);
    useCustomHook(data)

    return (
        <button onClick={()=>{setData(data+1)}}>Click Me</button>
    );
}


export default Component1;
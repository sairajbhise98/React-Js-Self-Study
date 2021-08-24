import React, { useEffect, useMemo, useState } from "react";

const MyUseMemo = () => {
    const [num , setNum] = useState(1);
    const [dark , setTheme] = useState(false)

    const DoubleNumber = (myNum) => {
        console.log("Double Number Function is Called");
        return myNum * 2
    }

    //const doubleNum = DoubleNumber(num)
    const doubleNum = useMemo(() => DoubleNumber(num) , [num])

    // const theme =  {
    //     backgroundColor : dark ? "#333" : "#FFF",
    //     color : dark ? "#FFF" : "#333"
    // }
    

  
    const theme = useMemo(() => {
        return {backgroundColor : dark ? "#333" : "#FFF",
        color : dark ? "#FFF" : "#333"}
    } , [dark])

    useEffect(() => {
        console.log("Theme Changed")
    } , [theme])

    return (
        
        <div>
            <h1>useMemo hook</h1>
            <input type = "number" value = {num} onChange = {(e) => setNum(parseInt(e.target.value))}></input>
            <button onClick = {() => setTheme(prevDark => !prevDark)}>Change Theme</button>
            <div style = {theme}>{doubleNum}</div>
        </div>

    );
}

export default MyUseMemo;
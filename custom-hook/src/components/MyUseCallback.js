import React, { useState , useCallback } from "react";
import MyList from "./MyList";

const MyUseCallback = () => {
    const [num , setNum] = useState(1);
    const [dark , setTheme] = useState(false)

    // const getItems = () => {
    //     return [num , num+1 , num+2]
    // } 

    const getItems = useCallback(() => {
        return [num , num+1 , num+2]
    } , [num])
    const theme = {
        backgroundColor : dark ? "#333" : "#FFF",
        color : dark ? "#FFF" : "#333"
    }
    return (
        
        <div style = {theme}>
            <h1>useCallback Hook</h1>
            <input type = "number" value = {num} onChange = {(e) => setNum(parseInt(e.target.value))}></input>
            <button onClick = {() => setTheme(prevDark => !prevDark)}>Change Theme</button>
            <MyList getItems = {getItems}></MyList>
        </div>

    );
}

export default MyUseCallback;
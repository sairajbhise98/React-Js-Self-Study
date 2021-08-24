import React , {useEffect , useState} from "react";

const MyList = ({getItems}) => {
    const [items , setItems] = useState([]);
    useEffect(() => {
        setItems(getItems());
        console.log("Updating Lists");
    } , [getItems])
    return (
        items.map(item => <div key = {item}>{item}</div>)
    );
}

export default MyList;
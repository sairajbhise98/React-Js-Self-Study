let FunctionComponent = (props) => {
    return (
         <>
        <div>
            <h1>Function Component</h1>
            <input type='text' onKeyUp={(e)=>{props.show(e.target.value)}}/>
            
        </div>
        <div>
            <h1>Hello</h1>
        </div>
        </>
    );
}


export default FunctionComponent;
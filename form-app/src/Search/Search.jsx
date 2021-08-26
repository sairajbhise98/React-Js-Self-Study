import { useState } from "react";
import './Search.css'


const Search = (props) => {

    const [searchText, setText] = useState('')

    const searchHandler = (event) => {
        // console.log(searchText)
        event.preventDefault()
        props.value(searchText.toLowerCase())
        setText('')
    }
    
    const resetHandler = (event) => {
        event.preventDefault()
        setText('')
        props.value(searchText)
    }

    return (
        <div>
            <form className='search'>
                <input value={searchText} type="text" onChange={(e) => {setText(e.target.value.trim())}}/>
                <br></br>
                <button onClick={searchHandler}>Search</button>
                <button onClick={resetHandler}>Reset</button>
            </form>
        </div>
    );
}

export default Search;
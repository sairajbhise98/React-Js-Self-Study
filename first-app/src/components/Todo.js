import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';


let Todo = (props) => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false) ;

    let deleteHandler = () => {
        console.log('Clicked!!');
        console.log(props.text);

        setModalIsOpen(true);
    }

    let closeModalHandler = () => {
        setModalIsOpen(false);
    }


    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal onClick={closeModalHandler} /> }
            { modalIsOpen && <Backdrop onClick={ closeModalHandler} /> }
        </div>
  );
}

export default Todo;

import React, {useState} from 'react';
import './BookAddForm.css';


function BookAddForm({addBook}) {

    const [name, setText] = useState('');
    const [author, setAuthor] = useState('');

    function inputNameChanged(e) {
        setText(e.target.value);
    }
    function inputAuthorChanged(e) {
        setAuthor(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addBook(name, author);
        setText('');
        setAuthor('');
    }
    return(
        <form action="" className="bottom-panel d-flex" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Какую книгу хотите добавить?"
                className="form-control new_post_label"
                onChange={inputNameChanged}
                value={name}
            />
            <input
                type="text"
                placeholder="Кто автор?"
                className="form-control new_post_label"
                onChange={inputAuthorChanged}
                value={author}
            />
            <button type="submit" className="btn btn-outline-secondary">
                Добавить
            </button>
        </form>
    )
}

export default BookAddForm
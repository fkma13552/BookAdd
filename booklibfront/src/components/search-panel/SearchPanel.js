import React, {useState} from 'react';
import './SearchPanel.css';


function SearchPanel(props) {

    const [query, setQuery] = useState('')

    function onType(e) {
        setQuery(e.target.value);
        props.onType(query);
    }

    return(
        <input className="form-control search-input"
               type="text"
               placeholder="Поиск по книгам"
               onChange={onType}/>
        )
}

export default SearchPanel;
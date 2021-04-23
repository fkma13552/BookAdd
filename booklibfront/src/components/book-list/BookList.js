import React from 'react';
import Book from "../book";
import './BookList.css';

function BookList({posts, deleteTweet, toggleImportant, toggleLike}) {

    const elements = posts.map(item => {
        if(typeof item === "object"){
            return(
                <li key={item.id} className="list-group-item">
                    <Book {...item}
                          onDelete={() => deleteTweet(item.id)}
                          onToggleImportant={() => toggleImportant(item.id)}
                          onToggleLike={() => toggleLike(item.id)}/>
                </li>
            )
        }
    });
    return(
            <ul className="app-list list-group">
                {elements}
            </ul>

    )
}
export default BookList;
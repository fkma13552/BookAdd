import React, {useState} from 'react';
import './Book.css';


function Book(props) {

    const important = props.important;
    const liked = props.liked;

    let classNames = "app-list-item d-flex justify-content-between";

    if(important){
        classNames += " important";
    }

    if(liked){
        classNames += " like";
    }

    return(
        <div className={classNames}>
            <span className="app-list-item-label" onClick={props.onToggleLike}>
                {props.label}, written by {props.author}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm" type="button" onClick={props.onToggleImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm" type="button" onClick={props.onDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
}
export default Book;
import React from 'react';
import './BookStatusFilter.css';


function BookStatusFilter(props) {

    const buttons =[
        {label: "Все", name: 'noFilter'},
        {label: "Понравилось", name: 'like'}
    ];

    const filters = buttons.map(item => {
        const active = props.filter === item.name;
        return (
            <button key={item.name}
                    type="button"
                    className={active ? "btn btn-info" : "btn btn-outline-secondary"}
                    onClick={() => props.filterSelect(item.name)}>{item.label}</button>
        )
    });

    return(
        <div className="btn-group">
            {filters}
        </div>
    )
}

export default BookStatusFilter;
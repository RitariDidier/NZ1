import React from 'react';
import './listItems.css';

function List(props){
    const items = props.items;
    const listItems = items.map(item =>{
        return (
            <div className="list" key={item.key}>
                <p>{item.text}<span onClick={() => props.deleteItem(item.key)} >-Remove</span></p>
            </div>
        )
    })
    return(
        <div>{listItems}</div>
    )
}
export default List;
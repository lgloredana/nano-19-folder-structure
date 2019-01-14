import React from 'react'

export default function List(props) {
    return (
        <ul>
            {props.items.map(item => (
                <li key={item.id}
                    onClick={ () => props.toggle && props.toggle(item.id)}
                    style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
                            <span>
                                {item.name}
                            </span>
                    <button onClick={() => props.removeItem(item)}>X</button>
                </li>
            ))}
        </ul>
    )
}
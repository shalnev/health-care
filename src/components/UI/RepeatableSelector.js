import React from 'react';

export default function RepeatableSelector(props) {
    return (
        <select className={props.className}>
            <option value='' disabled defaultValue>{props.placeholder}</option>
            {props.items.map(item => <option key={item.toString()} value={item}>{item}</option>)}
        </select>
    )
}

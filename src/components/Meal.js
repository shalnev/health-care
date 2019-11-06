import React from 'react';
import './Meal.scss';
import {HUNGER_STATES} from "../const";

function RepeatableDropdown(props) {
    return (
        <select className={props.className}>
            <option value='' disabled selected>{props.placeholder}</option>
            {props.items.map(item => <option value={item}>{item}</option>)}
        </select>
    )
}

function Meal() {


    return (
        <div className="wrapper">
            <section className="header">
                <button className="header__button">Cancel</button>
                <button className="header__button">Add</button>
            </section>
            <section className="card">
                <button className="card__item" aria-label="add new record">
                    <span aria-label="plus" role="img">➕ add new record</span>
                </button>
                <RepeatableDropdown className="card__item" placeholder="Hungry" items={HUNGER_STATES}/>
                <RepeatableDropdown className="card__item" placeholder="After meals" items={HUNGER_STATES}/>
                <div className="card__item">
                    <input name="time"/>
                    <input name="date" />
                </div>
                <div className="card__item" name="location"/>
                <textarea className="card__item" placeholder="feelings, party"/>
            </section>
        </div>
    );
}

export default Meal;

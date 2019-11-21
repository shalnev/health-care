import React from 'react';
import 'components/Meal.scss'
import {HUNGER_STATES} from "const";
import RepeatableSelector from "components/UI/RepeatableSelector";
import {Link} from "react-router-dom";

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
                <RepeatableSelector className="card__item" placeholder="Hungry" items={HUNGER_STATES}/>
                <RepeatableSelector className="card__item" placeholder="After meals" items={HUNGER_STATES}/>
                <div className="card__item">
                    <input placeholder="time" type="time" name="time"/>
                    <input placeholder="date" type="date" name="date"/>
                </div>
                <Link to='/map'>Выбрать место</Link>
                <textarea className="card__item" placeholder="feelings, party"/>
            </section>
        </div>
    );
}

export default Meal;

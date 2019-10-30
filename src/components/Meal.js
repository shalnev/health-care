import React from 'react';
import './Meal.scss';

function Meal() {
    return (
        <div className="wrapper">
            <section className="header">
                <button className="header__button">Cancel</button>
                <button className="header__button">Add</button>
            </section>
            <section className="card">
                <button aria-label="add new record">
                    <span aria-label="plus" role="img">➕ add new record</span>
                </button>
            </section>
        </div>
    );
}

export default Meal;

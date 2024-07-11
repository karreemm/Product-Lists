import React from 'react';

const Total = (props) => {
    const {items} = props;
    let total = 0
    for (let i = 0; i < items.length; i++) {
        total += parseFloat(items[i].price) * items[i].quantity;
    }
    return (
        <div className='total'>
            <p className="text">Total Price: <span className='total-price'>{total}</span> EGP</p>
        </div>
    )
}

export default Total;

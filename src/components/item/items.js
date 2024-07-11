import React from 'react';
import "../../App.css";
import EditIcon from "../images/edit.png"
import CartIcon from "../images/cart.png"
import PlusIcon from "../images/plus.png"
import MinusIcon from "../images/minus.png"
import DeleteIcon from "../images/delete.png"
import PriceIcon from "../images/price.png"
import QuantityIcon from "../images/quantity.png"

const Items = (props) => {
    const {items, del, increaseQuantity, decreaseQuantity} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div key={item.id} className="item">
                    <p>{item.product}</p>
                    <p>{item.price}</p>
                    <p className='quantity-items'>
                        <button onClick={() => decreaseQuantity(item.id)} className='quantity-btn'><img src={MinusIcon} className='icon2'></img></button>
                        <span className='text2'>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} className='quantity-btn'><img src={PlusIcon} className='icon2'></img></button>
                    </p>
                    <p className="delete" onClick={() => del(item.id)}><img src={DeleteIcon} className='icon'></img></p>
                </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p className='icon-parent'><img src={CartIcon} className='icon'></img><span className='header-text'>Product</span></p>
                <p className='icon-parent'><img src={PriceIcon} className='icon2'></img><span className='header-text'>Price</span></p>
                <p className='icon-parent'><img src={QuantityIcon} className='icon2'></img><span className='header-text'>Quantity</span></p>
                <p className='icon-parent'><img src={EditIcon} className='icon'></img><span className='header-text'>Edit</span></p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items;

import React, {Component} from 'react';
import "../../App.css"
import AddIcon from "../images/addcart.png"

class addItem extends Component {
    state = {
        product: '',
        price: ''
    }

    handleChange = (e) => {
        console.log(e.target.id + ": " + e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.add(this.state)
        this.setState({
            product: '',
            price: ''
        })
    }

    render(){
        return(
            <>
            <div className='add-item'>
                <h2>Add New Product</h2>
                <div className="item">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.product} placeholder="Name" id="product" onChange={this.handleChange} required/>
                        <input type="number" value={this.state.price} placeholder="Price" id="price" onChange={this.handleChange} required/>
                        <button type="submit" className='add-btn'><img src={AddIcon} className='icon3'></img>Add</button>
                    </form>
                </div>
            </div>
            </>

        )
    }
}

export default addItem;
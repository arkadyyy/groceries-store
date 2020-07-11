import React from 'react';
import './Cart.css';


class Cart extends React.Component{



    render(){
        return(
                <div className = 'cart'>
                    <h3>cart</h3>
                    <h6>count : {this.props.counter}</h6>
                </div>

        )
    }
}

export default Cart
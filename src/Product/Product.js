import React from 'react';
import './Product.css';



class Product extends React.Component{

    state = { productQuantity : this.props.quantity}

        
    addToCart = () =>{
        if( this.state.productQuantity <=0){
            return
        }
        this.setState( {productQuantity : this.state.productQuantity-1})

    }

    render(){
        return(

            <div className = 'product'>
                <h3>product</h3>
                <img width = '90px' height = '70px' src = {this.props.image}></img>
                <h4>quantity : {this.state.productQuantity}</h4>
                <button className = 'btn' onClick = {() => { this.addToCart(); this.state.productQuantity >0&&this.props.increment();}}  >add to cart</button>
            </div>


        )
    }
}
export default Product;
import React, { Component } from 'react'

export default class Shoes extends Component {
  render() {
    const { product,handleShoes } = this.props
    return (
      <div className='card'>
        <img src={product.image} alt="..." className='img-fluid' />
        <div className='card-body'>
          <h5>{product.name}</h5>
          <p>{product.price}$</p>

          <button className='btn btn-success' onClick={()=>handleShoes(product)}>Detail</button>

        </div>
      </div>
    )
  }
}

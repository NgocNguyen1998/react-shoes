import React, { Component } from 'react'
import dataShoes from './data.json'
import Shoes from './Shoes'
import Detail from './Detail'


export default class BTShoes extends Component {
    state = {
        shoes: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        }
    }
    handleShoes = (value)=>{
        this.setState({
            shoes:value
        })
    }
    
    render() {
        return (
            <div className='container'>
                <h2 className='text-center mt-4'>Bài tập Shoes</h2>

                <div className='row'>
                    {dataShoes.map((item) => {
                        return <div className='col-4 mt-4' key={item.id}>
                            <Shoes product={item} handleShoes={this.handleShoes}/>
                        </div>
                    })}
                </div>
               <Detail shoes = {this.state.shoes}/>
            </div>
        )
    }
}

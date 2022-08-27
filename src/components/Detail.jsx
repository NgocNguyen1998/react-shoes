import React, { Component } from 'react'

export default class extends Component {
    render() {
        const { shoes } = this.props
        return (
            <div>
                <h4 className='mt-4 pt-3'>Chi tiết sản phẩm</h4>
                <div className='row'>

                    <div className="col-4 my-5">
                        <img src={shoes.image} alt="..." className='img-fluid' />
                    </div>
                    <div className="col-6 mt-5">
                        <h5>Thông tin chi tiết</h5>
                        <table className='table'>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Tên sản phẩm</td>
                                    <td>{shoes.name}</td>
                                </tr>
                                <tr>
                                    <td>Giá</td>
                                    <td>{shoes.price}$</td>
                                </tr>
                                <tr>
                                    <td>Mô tả</td>
                                    <td>{shoes.description}</td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

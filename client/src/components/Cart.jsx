import React from 'react'


const Cart = () => {
    return (


        <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <p className="text-primary">Your cart</p>
                <p className="badge bg-primary rounded-pill">3</p>
            </h4>
            <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 className="my-0">Product name</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <p className="text-muted">$12</p>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 className="my-0">Second product</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <p className="text-muted">$8</p>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 className="my-0">Third item</h6>
                        <small className="text-muted">Brief description</small>
                    </div>
                    <p className="text-muted">$5</p>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                        <h6 className="my-0">Promo code</h6>
                        <small>EXAMPLECODE</small>
                    </div>
                    <p className="text-success">−$5</p>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <p>Total (USD)</p>
                    <strong>$20</strong>
                </li>
            </ul>

            <form className="card p-2">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code" />
                    <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
            </form>

        </div>
    )
}

export default Cart

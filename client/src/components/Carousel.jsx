import React, { useState } from 'react'
import avatar from '../static/avatar.jpg'
import luxe from '../static/luxe.PNG'
import shop from '../static/shop.PNG'

const Carousel = () => {

    const [pictureID, setPictureID] = useState(1)
    const pictures = [1, 2, 3]


    const cycleFwd = () => {

        if (pictureID > pictures.length - 1) {
            setPictureID(1)
        } else { setPictureID(pictureID + 1) }
    }
    const cycleBkwd = () => {

        if (pictureID < 1) {
            setPictureID(pictures.length - 1)
        } else { setPictureID(pictureID - 1) }
    }

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" >

                {pictureID == 1 ?
                    <div className="carousel-item active" itemID={1}>
                        <img src={luxe} className="d-block w-100" alt="..." />
                    </div>
                    : pictureID == 2 ?
                        <div className="carousel-item active" itemID={2}>
                            <img src={shop} className="d-block w-100" alt="..." />
                        </div>
                        :
                        <div className="carousel-item active" itemID={3}>
                            <img src={avatar} className="d-block w-100" alt="..." />
                        </div>
                }

                {/* <div className="carousel-item" itemID={2}>
                    <img src={shop} className="d-block w-100" alt="..." />
                </div> */}

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" onClick={(e) => cycleBkwd(e.target.value)}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={(e) => cycleFwd(e.target.value)}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel

import React from 'react'
// import { Carousel } from 'react-bootstrap'
import Times from './Times'

const Calendar = () => {
    const monthSelection = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weekdaySelection = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


    return (
        <div className="container">
            <div id="month" style={{ display: "flex", justifyContent: "center" }}>
                <p></p>

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <h3>Month Carousel...</h3>
                        </div>
                        {monthSelection.map((time, idx) => {
                            return (<div class="carousel-item ">{monthSelection[idx]}</div>)
                        })}
                        {/* 
                        <div class="carousel-item">
                        <p>February</p>
                        </div>
                        <div class="carousel-item">
                        <h3>March</h3>
                    </div> */}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                {/* <p>January</p> */}
            </div>
            <hr />
            <div id="times">
                {/* <div>
                    <p>
                        Morning
                    </p>
                    <p>8:00</p>
                    <p>8:30</p>
                    <p>9:00</p>
                    <p>9:30</p>
                    <p>10:00</p>
                    <p>10:30</p>
                    <p>11:00</p>
                    <p>11:30</p>
                </div>*/}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className="__title">
                        <span className="ng-scope">Morning</span>
                    </div>
                    <div className="__title">
                        <span className="ng-scope">Afternoon</span>
                    </div>
                    <div className="__title">
                        <span className="ng-scope">Evening</span>
                    </div>
                </div>
                <hr />
                <Times />
            </div>
        </div >
    )
}

export default Calendar

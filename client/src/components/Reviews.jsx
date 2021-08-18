import React, { useState } from 'react'

const Reviews = () => {
    const [liked, setLiked] = useState(0)
    const [disliked, setDisliked] = useState(0)
    return (
        <div style={{ display: 'flex', borderRadius: 10, padding: 5, flexDirection: "column", width: "100 %" }} className="container-sm">
            <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                <div style={{ margin: 5, display: "flex", }}>
                    <div style={{ maxWidth: 500 }}>
                        <h2>Reviews  </h2>
                        <h6>Only Verified reviews will be counted towards the average</h6>
                        {/* <p>***This needs a container ^ ***</p> */}
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'baseline', margin: 5, width: "50%" }}>
                    <div className="border" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 5, borderRadius: 10 }}>
                        <h1 style={{ padding: 10 }}>4.9/5</h1>

                        <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
                    </div>
                    <div className="border" style={{ display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 105, padding: 5, borderRadius: 10 }}>
                        <div>
                            5 	&#11088; ----- 84
                        </div>
                        <div>
                            4 	&#11088; ----- 1
                        </div>
                        <div>
                            3 	&#11088; ----- 0
                        </div>
                        <div>
                            2 	&#11088; ----- 0
                        </div>
                        <div>
                            1	&#11088; ----- 1
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', padding: 5 }} >
                <div>
                    <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
                    <p>Hair cuts, tapers, fades, afros, etc, Color treatments, Shampoo</p>
                    <p>by: Tammy</p>
                </div>
                <div className="ms-auto p-2 bd-highlight">
                    <p>Phillip Thomas - Jul 20, 2021 	&#x2705;</p>
                </div>
            </div>

            <div >
                <p>This Haircut was the bomb digity! 10/10 would recommend!</p>
            </div>
            <div className="d-flex bd-highlight mb-3" >
                <button type="button" className="btn btn-outline-secondary p-2 bd-highlight" style={{ borderRadius: 10 }}> 3 &#128077;</button>
                <button type="button" className="btn btn-outline-secondary p-2 bd-highlight" style={{ borderRadius: 10 }}> 0 &#128078;</button>
                <button type="button" className="btn btn-outline-secondary ms-auto p-2 bd-highlight" style={{ borderRadius: 10 }}> Report &#128681;</button>
            </div>

            <hr />

            <div style={{ display: 'flex', padding: 5 }} >
                <div>
                    <p>&#11088;&#11088;&#11088;&#10032; &#10032;</p>
                    <p>Tapers, fades, Color treatments, Shampoo, Scalp Massage</p>
                    <p>by: Tommy</p>
                </div>
                <div className="ms-auto p-2 bd-highlight">
                    <p>Fredrick P - Jun 1, 2021 	&#x2705;</p>
                </div>
            </div>
            <div >
                <p>My hair was cut uneven.  The skills were terrible, but the head massage was great! </p>
            </div>
            <div className="d-flex bd-highlight mb-3" >
                <button type="button" className="btn btn-outline-secondary p-2 bd-highlight" style={{ borderRadius: 10 }} > 0 &#128077;</button>
                <button type="button" className="btn btn-outline-secondary p-2 bd-highlight" style={{ borderRadius: 10 }}> 0 &#128078;</button>
                <button type="button" className="btn btn-outline-secondary ms-auto p-2 bd-highlight" style={{ borderRadius: 10 }}> Report &#128681;</button>
            </div>


        </div >
    )
}

export default Reviews

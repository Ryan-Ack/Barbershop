import React, { useState } from 'react'
import Modal from 'react-modal'
import Calendar from './Calendar'
import Times from './Times'
Modal.setAppElement('#root')
const Services = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [datePicked, setDatePicked] = useState(null)
    return (
        <div className="container">
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col" colSpan="1">Services</th>
                        <th scope="col">Price</th>
                        <th scope="col">Book</th>
                        {/* <th scope="col">Handle</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Hair cuts, tapers, fades, afros, etc</th>
                        <td>$65.00</td>
                        <td>
                            {/* <button type="button" className="btn btn-outline-info">Book</button> */}
                            <button className="btn btn-outline-info" onClick={() => setModalIsOpen(true)}>Book</button>
                            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{ overlay: { backgroundColor: 'gray' }, content: { color: 'orange' } }} className="modal-dialog modal-dialog-centered">
                                {/* <h2>modal title</h2> */}
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">Book an Appointment</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalIsOpen(false)}></button>
                                        </div>
                                        <div className="modal-body" >
                                            {/* <Calendar /> */}
                                            <input type="date" default={null} min="2021-07-28" max="2021-08-14" onChange={(e) => setDatePicked(e.target.value)} />
                                            <p>Stringify value: {JSON.stringify(datePicked)}</p>
                                            {
                                                datePicked != null ?
                                                    <Times /> : ""
                                            }
                                        </div>
                                        <div className="modal-footer">
                                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                            <button className="btn btn-secondary" onClick={() => setModalIsOpen(false)}> Close Modal </button>
                                            <button type="button" className="btn btn-primary">Understood</button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Standard buzz cut or 1 length even line up</th>
                        <td>$40.00</td>
                        <td><button type="button" className="btn btn-outline-info">Book</button></td>
                    </tr>
                    <tr>
                        <th scope="row">Shave trimmer only</th>
                        <td >$30.00</td>
                        <td><button type="button" className="btn btn-outline-info">Book</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Services

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button'
import { Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-modal'
Modal.setAppElement('#root')

const Bootstrap = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className="container">

            <button className="btn btn-warning" onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{ overlay: { backgroundColor: 'gray' }, content: { color: 'orange' } }} className="modal-dialog modal-dialog-centered">
                {/* <h2>modal title</h2> */}
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalIsOpen(false)}></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto obcaecati placeat debitis deserunt ullam eos, vero illo aperiam incidunt sapiente fuga quos aspernatur soluta, saepe perferendis earum suscipit animi iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quaerat ipsam eligendi temporibus repellendus, fugit quisquam voluptas deleniti necessitatibus error. Dolores adipisci nihil alias voluptas maxime culpa ex fuga pariatur!
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button className="btn btn-secondary" onClick={() => setModalIsOpen(false)}> Close Modal </button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </Modal>
            <hr />
            <Form>
                <Row>
                    <Col md>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Example@email.com" />
                            <Form.Text className="text-muted"> Never Share it yo. </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="password" />
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" variant="secondary"> Login </Button>
            </Form>
            <hr />
            <Alert variant="success"> Another Button</Alert>
            <Button>Test Button</Button>
            <hr />
            <Breadcrumb>
                <Breadcrumb.Item active>Test 1</Breadcrumb.Item>
                <Breadcrumb.Item >Test 2</Breadcrumb.Item>
                <Breadcrumb.Item >Test 3</Breadcrumb.Item>
            </Breadcrumb>
            <hr />
            <Card>
                <Card.Img />
                <Card.Body>
                    <Card.Title>
                        Card Title
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolore eaque incidunt perspiciatis cum ab consectetur quo atque, exercitationem architecto modi explicabo, nobis labore quas qui magni voluptatum facere! Consectetur!
                    </Card.Text>
                </Card.Body>
            </Card>
            <hr />

        </div>
    )
}

export default Bootstrap
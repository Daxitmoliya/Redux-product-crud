import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import studentaction from "../../container/Services/Action/Student.action";
import { useNavigate } from "react-router";


const Createformdata = () => {

    const [formdata, setformdata] = useState({
        image: '',
        title: '',
        price: '',
        Oprice: '',
        description: '',
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {   

        const name = e.target.name;
        const value = e.target.value;

        setformdata({...formdata , [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let uid = Math.floor(Math.random() * 1000)
        console.log("uid" , uid);
        let newStudent = { ...formdata, id : uid }
        console.log("NEw" , newStudent);

        dispatch(studentaction(newStudent));

        setformdata({
            image: '',
            title: '',
            price: '',
            Oprice: '',
            description: '',
        })
        navigate("/view");
    }

    return (
        <>

            <section className="create">

                <div className="container">
                    <Form className="pt-3" onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter the image URL" name="image" value={formdata.image} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter the title" name="title" value={formdata.title} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter the price" name="price" value={formdata.price} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Original Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter the original price" name="Oprice" value={formdata.Oprice} onChange={handleChange} />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter the description" name="description" value={formdata.description} onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </section>

        </>
    )

}
export default Createformdata;

import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../container/Services/Action/Student.action";
import { useNavigate } from "react-router";

const EditStudent = () => {
    const { student } = useSelector((state) => state.studentReducer);
    const [formData, setFormData] = useState(student);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateData(formData));
        navigate("/view");
    };

    return (
        <>
            <section className="create">
                <div className="container">
                    <Form className="pt-3" onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label className="sr-only">Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter the image URL" name="image" value={formData.image} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label className="sr-only">Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter the title" name="title" value={formData.title} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label className="sr-only">Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter the price" name="price" value={formData.price} onChange={handleChange} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label className="sr-only">Original Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter the original price" name="Oprice" value={formData.Oprice} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label className="sr-only">Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter the description" name="description" value={formData.description} onChange={handleChange} />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </div>
            </section>
        </>
    );
};

export default EditStudent;

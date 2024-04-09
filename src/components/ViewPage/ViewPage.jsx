import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletestu, singleStu } from '../../container/Services/Action/Student.action';
import { useNavigate } from 'react-router';

const ViewPage = () => {
    const { students } = useSelector((state) => state.studentReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); 

    const handleEdit = (id) => {
        dispatch(singleStu(id));
        navigate("/edit");
    }

    const handleDelete = (id) => {
        dispatch(deletestu(id))
    }

    const handleSort = () => {
     
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
    }

  
    const sortedStudents = [...students].sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if (titleA > titleB) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });

   
    const filteredAndSortedStudents = sortedStudents.filter(stu =>
        stu.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <center><h2>Product Details</h2></center>
            <div className="search-container">
                <Form.Control
                    type="text"
                    placeholder="Search by title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <Button variant="primary" className="search-button">Search</Button>
            </div>
            <div className="sorting-container">
                <Button variant="primary" onClick={handleSort}>
                    Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
                </Button>
            </div>
            <div className="card-container">
                {filteredAndSortedStudents.map((stu, index) => (
                    <Card key={index} className="card">
                        <Card.Img variant="top" src={stu.image} className="card-img-top" />
                        <Card.Body>
                            <Card.Title className="card-title">{stu.title}</Card.Title>
                            <Card.Text>
                                <p>Price: {stu.price}</p>
                                <p>Original Price: {stu.Oprice}</p>
                                <p>Description: {stu.description}</p>
                            </Card.Text>
                            <Button variant="primary" onClick={() => handleEdit(stu.id)}>Edit</Button>
                            {' '}
                            <Button variant="primary" onClick={() => handleDelete(stu.id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default ViewPage;

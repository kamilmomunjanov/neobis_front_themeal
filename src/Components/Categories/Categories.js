import React, {useEffect, useState} from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Catgories.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(({data}) => setCategories(data.categories))
    },[])
    console.log(categories);
    const navigate = useNavigate()

    return (
        <div>
            <Container>
                <Row>
                    {categories.map(item => (
                        <Col md={4} sm={6} xs={12} key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.strCategoryThumb} />
                                <Card.Body>
                                    <Card.Title>{item.strCategory}</Card.Title>
                                    <Card.Text>{item.strCategoryDescription}</Card.Text>
                                    <Button type="button" variant="primary" onClick={() => navigate(`category/${item.strCategory.toLowerCase()}`)}>Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Categories;
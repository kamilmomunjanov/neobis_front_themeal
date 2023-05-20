import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, Link, useNavigate} from "react-router-dom";
import {Card, Col, Container, Row} from "react-bootstrap";
import "../../Components/Categories/Catgories.css";

const Category = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [meal, setMeal] = useState([])
    const [oneMeal, setOneMeal] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`)
            .then(({data}) => setMeal(data.meals))
    }, [])


    return (
        <div>
            <Container>
                <Row>
                    {meal.map(item => (
                        <Col md={4} sm={6} xs={12} key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.strMealThumb} />
                                <Card.Body>
                                    <Card.Title>{item.strMeal}</Card.Title>
                                    <Link to={`/${item.idMeal}`}>More info</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Category;
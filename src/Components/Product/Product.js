import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import "./Product.css";

const Product = () => {
    const [oneMeal, setOneMeal] = useState({})

    const params = useParams()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(({data}) => setOneMeal(data.meals[0]))
    }, [params.id])

    const navigate = useNavigate()


    if ('strMeal' in oneMeal) {
        return (
            <div className="container instructionsMeals">
                <div className="instructionsMeals__content">
                    <div className="instructionsMeals__description">
                        <p className="instructionsMeals__title">{oneMeal.strMeal}</p>
                        <span className="instructionsMeals__subtitle">{oneMeal.strCategory} | {oneMeal.strArea}</span>
                    </div>
                    <img className="instructionsMeals__img" src={oneMeal.strMealThumb} alt=""/>
                </div>
                <h3 className="instructionsMeals__title center">Instructions</h3>
                <p className="instructionsMeals__text">{oneMeal.strInstructions}</p>
                <button className="instructionsMeals__btn"><a className="instructionsMeals__youtube" target="_blank"
                                                              href={oneMeal.strYoutube}>Watch on YouTube</a></button>
            </div>
        );
    } else {
        return <span>...Loading</span>
    }
};

export default Product;
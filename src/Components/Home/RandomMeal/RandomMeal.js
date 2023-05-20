import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./RandomMeals.css";

const RandomMeal = () => {
    const [randomMeal, setRandomMeal] = useState({})

    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(({data}) => setRandomMeal(data.meals[0]))
    }, [])
    console.log(randomMeal)

    if ('strMeal' in randomMeal) {
        return (
            <section className="randomMeals">
                <div className="container">
                    <div className="randomMeals__box">
                        <div className="randomMeals__box-left">
                            <h2 className='randomMeals__title'>Meal of the day</h2>
                            <p className="randomMeals__subtitle">{randomMeal.strMeal}</p>
                            <span
                                className="randomMeals__category">{randomMeal.strCategory} | {randomMeal.strArea}</span>
                        </div>
                        <img className="randomMeals__img" src={randomMeal.strMealThumb} alt=""/>
                    </div>
                </div>
            </section>
        );
    } else {
        return <span>...Loading</span>
    }


};

export default RandomMeal;
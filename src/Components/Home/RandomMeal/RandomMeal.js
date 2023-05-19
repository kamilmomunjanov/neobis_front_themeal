import React,{useEffect, useState} from 'react';
import axios from "axios";

const RandomMeal = () => {
    const [randomMeal, setRandomMeal] = useState({})

    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(({data}) => setRandomMeal(data.meals[0]))
    }, [])
    console.log(randomMeal)

    if ('strMeal' in randomMeal) {
        return (
            <section>
                <h2>Meal of the day</h2>
                <p>{randomMeal.strMeal}</p>
                <span>{randomMeal.strCategory} |  {randomMeal.strArea}</span>
                <img src={randomMeal.strMealThumb} alt=""/>
            </section>
        );
    } else {
        return <span>...Loading</span>
    }


};

export default RandomMeal;
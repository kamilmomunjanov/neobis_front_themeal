import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const Product = () => {
    const [oneMeal, setOneMeal] = useState({})

    const params = useParams()
     useEffect(()=>{
         axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
             .then(({data}) => setOneMeal(data.meals[0]))
     }, [params.id])

    const navigate = useNavigate()



    if ('strMeal' in oneMeal) {
        return (
            <div>
                <div>
                    <p>{oneMeal.strMeal}</p>
                    <span>{oneMeal.strCategory} |  {oneMeal.strArea}</span>
                </div>
                <img src={oneMeal.strMealThumb} alt=""/>
                <div>{oneMeal.strInstructions}</div>
                <a target="_blank" href={oneMeal.strYoutube}>YouTube</a>
            </div>
        );
    } else {
        return <span>...Loading</span>
    }
};

export default Product;
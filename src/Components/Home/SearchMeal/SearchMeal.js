import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {logDOM} from "@testing-library/react";

const SearchMeal = () => {

    const [meals, setMeals] = useState([])
    const findMeals = (e) => {
        e.preventDefault()
        let search = e.target[0].value
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(({data}) => setMeals(data.meals))
    }

    const navigate = useNavigate()

    return (
        <section>
            <h2>Search a meal</h2>
            <form onSubmit={findMeals}>
                <input type="text"/>
                <button type="submit" >Search</button>
            </form>
            <div>
                {
                    meals.map((item) => (
                        <div key={item.idMeal}>
                            <p>{item.strMeal}</p>
                            <span>{item.strCategory} |  {item.strArea}</span>
                            <img onClick={() => navigate(`/${item.idMeal}`)} src={item.strMealThumb} alt=""/>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default SearchMeal;
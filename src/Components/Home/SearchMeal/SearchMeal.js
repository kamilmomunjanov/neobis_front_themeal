import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "./SearchMeal.css"

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
        <section className="search">
            <h2 className="search__title">Find your Meal</h2>
            <form className="search__form" onSubmit={findMeals}>
                <input placeholder="Find your Meal..." className="search__input" type="text"/>
                <button className="search__btn" type="submit" >Search</button>
            </form>
            <div className="search__box container">
                {
                    meals.map((item) => (
                        <div className="search__content" key={item.idMeal}>
                            <img className="search__img" onClick={() => navigate(`/${item.idMeal}`)} src={item.strMealThumb} alt=""/>
                            <div className="search__content-right">
                            <p className="search__right-title">{item.strMeal}</p>
                            <span className="search__right-subtitle">{item.strCategory} |  {item.strArea}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    );
};

export default SearchMeal;
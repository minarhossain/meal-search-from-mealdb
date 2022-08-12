import React, { useEffect, useState } from 'react';
import MealItem from './MealItem';
import RecipeIndex from './RecipeIndex';

const Meal = () => {
    const [url, setUrl] = useState('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data.meals);
                setShow(true);
                console.log(data.meals)
            })
    }, [url]);

    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    return (
        <>
            <div className="main">

                <div className="heading">
                    <h1>Search Here Food Recipe</h1>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam suscipit omnis nam rem expedita possimus aliquid tenetur labore delectus tempore.</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="searchBar" id="" />
                </div>

                <div className="container">

                    {
                        show ? <MealItem data={item} /> : "Not Found"
                    }
                </div>
                <div className="indexContainer">
                    <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
                </div>

            </div>
        </>
    );
};

export default Meal;
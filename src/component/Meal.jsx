import React, { useEffect } from 'react';
import { useState } from 'react';
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

                console.log(data.meals);
                setItem(data.meals);
                setShow(true);
            });
    }, [url])

    return (
        <>
            <div className="main">
                <div className="heading">
                    <h2>Search Your Food Here!!</h2>
                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, atque maxime! Ab magnam, eos repudiandae earum reprehenderit ullam dolorum recusandae ipsa quod perferendis pariatur aliquam!</h4>
                </div>
                <div className="searchBox">
                    <input type="search" name="search" id="search" className="search-bar" />
                </div>
                <div className="container">
                    {
                        show ? <MealItem data={item} /> : "Not Found"
                    }
                </div>
                <div className="indexContainer">
                    <RecipeIndex />
                </div>
            </div>
        </>
    );
};

export default Meal;
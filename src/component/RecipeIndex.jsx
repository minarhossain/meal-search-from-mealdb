import React from 'react';

const RecipeIndex = () => {
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num = 0;
    return (
        <div>
            {
                alpha.map(item => {
                    return (
                        <div className="numBox" key={num++}>
                            <h3>{ item}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default RecipeIndex;
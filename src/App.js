
import './App.css';
import Meal from './components/Meal';
import './components/style.css';
import { Routes, Route } from 'react-router-dom';
import RecipeInfo from './components/RecipeInfo';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meal />}></Route>
        <Route path={"/:MealId"} element={<RecipeInfo></RecipeInfo>}></Route>
      </Routes>

    </>
  );
}

export default App;

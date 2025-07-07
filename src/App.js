import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NutritionInfo from "./pages/NutritionInfo";
import MealPlanPage from "./pages/MealPlanPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nutrition" element={<NutritionInfo />} />
        <Route path="/mealplan" element={<MealPlanPage />} />
      </Routes>
    </Router>
  );
}

export default App;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './MealPlanPage.css'; // Import the CSS file

// const MealPlanPage = () => {
//     const [preferences, setPreferences] = useState({
//         dietaryRestrictions: '',
//         allergies: '',
//         healthConditions: '',
//         activityLevel: '',
//         calorieGoal: '',
//     });
//     const [mealPlan, setMealPlan] = useState(null);

//     const handleGenerateMealPlan = async () => {
//         try {
//             const response = await axios.post('http://localhost:5004/api/mealplan', { preferences });
//             setMealPlan(response.data); // Set the structured JSON response
//         } catch (error) {
//             console.error('Error generating meal plan:', error);
//         }
//     };

//     // Function to format the meal plan data into HTML
//     const formatMealPlan = (data) => {
//         if (!data) return null;

//         return (
//             <div className="meal-plan-details">
//                 <h2 className="main-heading">Your Weekly Meal Plan</h2>
//                 {data.meals.map((meal, index) => (
//                     <div key={index} className="meal-item">
//                         <h3 className="meal-title">{meal.title}</h3>
//                         <p><strong>Ready in:</strong> {meal.readyInMinutes} minutes</p>
//                         <p><strong>Servings:</strong> {meal.servings}</p>
//                         <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer" className="recipe-link">
//                             View Recipe
//                         </a>
//                     </div>
//                 ))}
//                 <div className="nutrients-summary">
//                     <h3 className="sub-heading">Nutrients Summary</h3>
//                     <ul className="nutrients-list">
//                         <li><strong>Calories:</strong> {data.nutrients.calories} kcal</li>
//                         <li><strong>Protein:</strong> {data.nutrients.protein}g</li>
//                         <li><strong>Fat:</strong> {data.nutrients.fat}g</li>
//                         <li><strong>Carbohydrates:</strong> {data.nutrients.carbohydrates}g</li>
//                     </ul>
//                 </div>
//             </div>
//         );
//     };

//     return (
//         <div className="meal-plan-container">
//             <h2 className="page-title">Generate Meal Plan</h2>
//             <div className="preferences-form">
//                 <input
//                     type="text"
//                     placeholder="Dietary Restrictions"
//                     value={preferences.dietaryRestrictions}
//                     onChange={(e) => setPreferences({ ...preferences, dietaryRestrictions: e.target.value })}
//                     className="form-input"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Allergies"
//                     value={preferences.allergies}
//                     onChange={(e) => setPreferences({ ...preferences, allergies: e.target.value })}
//                     className="form-input"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Health Conditions"
//                     value={preferences.healthConditions}
//                     onChange={(e) => setPreferences({ ...preferences, healthConditions: e.target.value })}
//                     className="form-input"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Activity Level"
//                     value={preferences.activityLevel}
//                     onChange={(e) => setPreferences({ ...preferences, activityLevel: e.target.value })}
//                     className="form-input"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Calorie Goal"
//                     value={preferences.calorieGoal}
//                     onChange={(e) => setPreferences({ ...preferences, calorieGoal: e.target.value })}
//                     className="form-input"
//                 />
//                 <button onClick={handleGenerateMealPlan} className="generate-button">
//                     Generate Meal Plan
//                 </button>
//             </div>
//             {mealPlan && (
//                 <div className="meal-plan-results">
//                     <h3 className="results-title">Your Meal Plan</h3>
//                     <div className="meal-plan-content">
//                         {formatMealPlan(mealPlan)}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// // export default MealPlanPage;

//import React, { useState } from 'react';
// // import axios from 'axios';
// // import './MealPlanPage.css'; // Import the CSS file

// // const MealPlanPage = () => {
// //     const [preferences, setPreferences] = useState({
// //         dietaryRestrictions: '',
// //         allergies: '',
// //         healthConditions: '',
// //         activityLevel: '',
// //         calorieGoal: '',
// //     });
// //     const [mealPlan, setMealPlan] = useState(null);

// //     const handleGenerateMealPlan = async () => {
// //         try {
// //             const response = await axios.post('http://localhost:5004/api/mealplan', { preferences });
// //             setMealPlan(response.data.mealPlan); // Access the mealPlan string
// //         } catch (error) {
// //             console.error('Error generating meal plan:', error);
// //         }
// //     };

// //     // Function to format the meal plan data into HTML
// //     const formatMealPlan = (data) => {
// //         return data.split('\n').map((line, index) => {
// //             if (line.startsWith('## ')) {
// //                 // Main heading
// //                 return <h2 key={index} className="main-heading">{line.replace('## ', '')}</h2>;
// //             } else if (line.startsWith('**') && line.endsWith('**')) {
// //                 // Subheadings
// //                 return <h3 key={index} className="sub-heading">{line.replace(/\*\*/g, '')}</h3>;
// //             } else if (line.startsWith('* ')) {
// //                 // List items
// //                 return <li key={index} className="list-item">{line.replace('* ', '')}</li>;
// //             } else if (line.trim() === '') {
// //                 // Empty lines (add spacing)
// //                 return <br key={index} />;
// //             } else {
// //                 // Regular paragraphs
// //                 return <p key={index} className="paragraph">{line}</p>;
// //             }
// //         });
// //     };

// //     return (
// //         <div className="meal-plan-container">
// //             <h2 className="page-title">Generate Meal Plan</h2>
// //             <div className="preferences-form">
// //                 <input
// //                     type="text"
// //                     placeholder="Dietary Restrictions"
// //                     value={preferences.dietaryRestrictions}
// //                     onChange={(e) => setPreferences({ ...preferences, dietaryRestrictions: e.target.value })}
// //                     className="form-input"
// //                 />
// //                 <input
// //                     type="text"
// //                     placeholder="Allergies"
// //                     value={preferences.allergies}
// //                     onChange={(e) => setPreferences({ ...preferences, allergies: e.target.value })}
// //                     className="form-input"
// //                 />
// //                 <input
// //                     type="text"
// //                     placeholder="Health Conditions"
// //                     value={preferences.healthConditions}
// //                     onChange={(e) => setPreferences({ ...preferences, healthConditions: e.target.value })}
// //                     className="form-input"
// //                 />
// //                 <input
// //                     type="text"
// //                     placeholder="Activity Level"
// //                     value={preferences.activityLevel}
// //                     onChange={(e) => setPreferences({ ...preferences, activityLevel: e.target.value })}
// //                     className="form-input"
// //                 />
// //                 <input
// //                     type="text"
// //                     placeholder="Calorie Goal"
// //                     value={preferences.calorieGoal}
// //                     onChange={(e) => setPreferences({ ...preferences, calorieGoal: e.target.value })}
// //                     className="form-input"
// //                 />
// //                 <button onClick={handleGenerateMealPlan} className="generate-button">
// //                     Generate Meal Plan
// //                 </button>
// //             </div>
// //             {mealPlan && (
// //                 <div className="meal-plan-results">
// //                     <h3 className="results-title">Your Meal Plan</h3>
// //                     <div className="meal-plan-content">
// //                         {formatMealPlan(mealPlan)}
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default MealPlanPage;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './MealPlanPage.css';

// const MealPlanPage = () => {
//     const [preferences, setPreferences] = useState({
//         dietaryRestrictions: '',
//         allergies: '',
//         healthConditions: '',
//         activityLevel: '',
//         calorieGoal: '',
//         age: '',
//         budget: ''
//     });
//     const [mealPlan, setMealPlan] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const handleGenerateMealPlan = async () => {
//         setIsLoading(true);
//         setError(null);

//         try {
//             const response = await axios.post('http://localhost:5005/api/mealplan', {
//                 preferences
//             }, {
//                 timeout: 10000 // 10 second timeout
//             });

//             if (response.data.success) {
//                 setMealPlan(response.data.data || response.data.mealPlan);
//             } else {
//                 setError(response.data.error || 'Failed to generate meal plan');
//             }
//         } catch (error) {
//             console.error('Error generating meal plan:', error);
//             setError(error.response?.data?.error || error.message || 'Failed to connect to server');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const formatMealPlan = (data) => {
//         if (!data) return null;

//         // Handle string response (markdown/text)
//         if (typeof data === 'string') {
//             return (
//                 <div className="meal-plan-text">
//                     {data.split('\n').map((line, i) => (
//                         <p key={i}>{line}</p>
//                     ))}
//                 </div>
//             );
//         }

//         // Handle structured response with meals array
//         if (data.meals && Array.isArray(data.meals)) {
//             return (
//                 <div className="meal-plan-details">
//                     <h2 className="main-heading">Your Weekly Meal Plan</h2>
//                     {data.meals.map((meal, index) => (
//                         <div key={index} className="meal-item">
//                             <h3 className="meal-title">{meal.title || 'Untitled Meal'}</h3>
//                             {meal.readyInMinutes && (
//                                 <p><strong>Ready in:</strong> {meal.readyInMinutes} minutes</p>
//                             )}
//                             {meal.servings && (
//                                 <p><strong>Servings:</strong> {meal.servings}</p>
//                             )}
//                             {meal.sourceUrl && (
//                                 <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer" className="recipe-link">
//                                     View Recipe
//                                 </a>
//                             )}
//                         </div>
//                     ))}
//                     {data.nutrients && (
//                         <div className="nutrients-summary">
//                             <h3 className="sub-heading">Nutrients Summary</h3>
//                             <ul className="nutrients-list">
//                                 <li><strong>Calories:</strong> {data.nutrients.calories || 'N/A'} kcal</li>
//                                 <li><strong>Protein:</strong> {data.nutrients.protein || 'N/A'}g</li>
//                                 <li><strong>Fat:</strong> {data.nutrients.fat || 'N/A'}g</li>
//                                 <li><strong>Carbohydrates:</strong> {data.nutrients.carbohydrates || 'N/A'}g</li>
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             );
//         }

//         // Fallback for unexpected format
//         return (
//             <div className="meal-plan-error">
//                 <p>Received meal plan in unexpected format.</p>
//                 <pre>{JSON.stringify(data, null, 2)}</pre>
//             </div>
//         );
//     };

//     return (
//         <div className="meal-plan-container">
//             <h2 className="page-title">Generate Meal Plan</h2>
//             <div className="preferences-form">
//                 <input
//                     type="text"
//                     placeholder="Dietary Restrictions (e.g., vegetarian)"
//                     value={preferences.dietaryRestrictions}
//                     onChange={(e) => setPreferences({ ...preferences, dietaryRestrictions: e.target.value })}
//                     className="form-input"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Allergies (e.g., nuts, dairy)"
//                     value={preferences.allergies}
//                     onChange={(e) => setPreferences({ ...preferences, allergies: e.target.value })}
//                     className="form-input"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Health Conditions (e.g., diabetes)"
//                     value={preferences.healthConditions}
//                     onChange={(e) => setPreferences({ ...preferences, healthConditions: e.target.value })}
//                     className="form-input"
//                 />
//                 <select
//                     value={preferences.activityLevel}
//                     onChange={(e) => setPreferences({ ...preferences, activityLevel: e.target.value })}
//                     className="form-input"
//                 >
//                     <option value="">Select Activity Level</option>
//                     <option value="sedentary">Sedentary</option>
//                     <option value="light">Light</option>
//                     <option value="moderate">Moderate</option>
//                     <option value="active">Active</option>
//                     <option value="very-active">Very Active</option>
//                 </select>
//                 <input
//                     type="number"
//                     placeholder="Daily Calorie Goal (e.g., 2000)"
//                     value={preferences.calorieGoal}
//                     onChange={(e) => setPreferences({ ...preferences, calorieGoal: e.target.value })}
//                     className="form-input"
//                 />
//                 <input
//                     type="number"
//                     placeholder="Age"
//                     value={preferences.age}
//                     onChange={(e) => setPreferences({ ...preferences, age: e.target.value })}
//                     className="form-input"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Budget (e.g., 1500 rupees/week)"
//                     value={preferences.budget}
//                     onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
//                     className="form-input"
//                 />

//                 <button
//                     onClick={handleGenerateMealPlan}
//                     className="generate-button"
//                     disabled={isLoading}
//                 >
//                     {isLoading ? 'Generating...' : 'Generate Meal Plan'}
//                 </button>
//             </div>

//             {error && (
//                 <div className="error-message">
//                     <p>{error}</p>
//                 </div>
//             )}

//             {mealPlan && (
//                 <div className="meal-plan-results">
//                     <h3 className="results-title">Your Meal Plan</h3>
//                     <div className="meal-plan-content">
//                         {formatMealPlan(mealPlan)}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MealPlanPage;


import React, { useState } from 'react';
import axios from 'axios';
import './MealPlanPage.css';

const MealPlanPage = () => {
    const [preferences, setPreferences] = useState({
        dietaryRestrictions: '',
        allergies: '',
        healthConditions: '',
        activityLevel: '',
        calorieGoal: '',
        age: '',
        budget: ''
    });
    const [mealPlan, setMealPlan] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerateMealPlan = async () => {
        setIsLoading(true);
        setError(null);
        setMealPlan(null);

        try {
            const response = await axios.post('http://localhost:5005/api/mealplan', {
                preferences
            }, {
                timeout: 10000
            });

            if (response.data.success) {
                setMealPlan(response.data.data || response.data.mealPlan);
            } else {
                setError(response.data.error || 'Failed to generate meal plan');
            }
        } catch (error) {
            console.error('Error generating meal plan:', error);
            setError(error.response?.data?.error || error.message || 'Failed to connect to server');
        } finally {
            setIsLoading(false);
        }
    };

    const formatMealPlan = (data) => {
        if (!data) return null;

        // Handle string response (markdown/text)
        if (typeof data === 'string') {
            // Clean and format the markdown response
            const formattedData = data
                .replace(/\*\*/g, '') // Remove bold markers
                .replace(/#+\s/g, '') // Remove markdown headers
                .replace(/\*/g, '•');  // Replace asterisks with bullets

            return (
                <div className="meal-plan-text">
                    {formattedData.split('\n').map((line, i) => {
                        if (line.trim() === '') return null;

                        // Format day headings
                        if (line.match(/Day\s\d+/i)) {
                            return <h3 key={i} className="day-heading">{line}</h3>;
                        }

                        // Format meal times
                        if (line.match(/(Breakfast|Lunch|Dinner|Snacks)/i)) {
                            const [mealTime, ...mealDesc] = line.split(':');
                            return (
                                <div key={i} className="meal-time-container">
                                    <h4 className="meal-time">{mealTime.trim()}</h4>
                                    <p className="meal-description">{mealDesc.join(':').trim()}</p>
                                </div>
                            );
                        }

                        // Format notes and other text
                        return <p key={i} className="meal-plan-paragraph">{line}</p>;
                    })}
                </div>
            );
        }

        // Handle structured response with meals array
        if (data.meals && Array.isArray(data.meals)) {
            return (
                <div className="meal-plan-details">
                    <h2 className="main-heading">Your Weekly Meal Plan</h2>
                    {data.meals.map((meal, index) => (
                        <div key={index} className="meal-item">
                            <h3 className="meal-title">{meal.title || 'Untitled Meal'}</h3>
                            {meal.readyInMinutes && (
                                <p><strong>Ready in:</strong> {meal.readyInMinutes} minutes</p>
                            )}
                            {meal.servings && (
                                <p><strong>Servings:</strong> {meal.servings}</p>
                            )}
                            {meal.sourceUrl && (
                                <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer" className="recipe-link">
                                    View Recipe
                                </a>
                            )}
                        </div>
                    ))}
                    {data.nutrients && (
                        <div className="nutrients-summary">
                            <h3 className="sub-heading">Nutrients Summary</h3>
                            <ul className="nutrients-list">
                                <li><strong>Calories:</strong> {data.nutrients.calories || 'N/A'} kcal</li>
                                <li><strong>Protein:</strong> {data.nutrients.protein || 'N/A'}g</li>
                                <li><strong>Fat:</strong> {data.nutrients.fat || 'N/A'}g</li>
                                <li><strong>Carbohydrates:</strong> {data.nutrients.carbohydrates || 'N/A'}g</li>
                            </ul>
                        </div>
                    )}
                </div>
            );
        }

        return (
            <div className="meal-plan-error">
                <p>Received meal plan in unexpected format.</p>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        );
    };

    return (
        <div className="meal-plan-container">
            <h2 className="page-title">Generate Your Personalized Meal Plan</h2>

            <div className="preferences-form">
                <div className="form-group">
                    <label>Dietary Restrictions</label>
                    <input
                        type="text"
                        placeholder="e.g., Vegetarian, Jain, No-onion-garlic"
                        value={preferences.dietaryRestrictions}
                        onChange={(e) => setPreferences({ ...preferences, dietaryRestrictions: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label>Allergies</label>
                    <input
                        type="text"
                        placeholder="e.g., Nuts, Dairy, Gluten"
                        value={preferences.allergies}
                        onChange={(e) => setPreferences({ ...preferences, allergies: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label>Health Conditions</label>
                    <input
                        type="text"
                        placeholder="e.g., Diabetes, Hypertension"
                        value={preferences.healthConditions}
                        onChange={(e) => setPreferences({ ...preferences, healthConditions: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label>Activity Level</label>
                    <select
                        value={preferences.activityLevel}
                        onChange={(e) => setPreferences({ ...preferences, activityLevel: e.target.value })}
                        className="form-input"
                    >
                        <option value="">Select Activity Level</option>
                        <option value="sedentary">Sedentary (little/no exercise)</option>
                        <option value="light">Light (light exercise 1-3 days/week)</option>
                        <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
                        <option value="active">Active (hard exercise 6-7 days/week)</option>
                        <option value="very-active">Very Active (very hard exercise & physical job)</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Daily Calorie Goal</label>
                    <input
                        type="number"
                        placeholder="e.g., 2000 calories"
                        value={preferences.calorieGoal}
                        onChange={(e) => setPreferences({ ...preferences, calorieGoal: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        placeholder="Your age"
                        value={preferences.age}
                        onChange={(e) => setPreferences({ ...preferences, age: e.target.value })}
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label>Weekly Budget (₹)</label>
                    <input
                        type="text"
                        placeholder="e.g., 1500 rupees"
                        value={preferences.budget}
                        onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
                        className="form-input"
                    />
                </div>

                <button
                    onClick={handleGenerateMealPlan}
                    className={`generate-button ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span className="spinner"></span>
                            Generating...
                        </>
                    ) : (
                        'Generate Meal Plan'
                    )}
                </button>
            </div>

            {error && (
                <div className="error-message">
                    <p>{error}</p>
                    <button onClick={() => setError(null)} className="dismiss-button">
                        Dismiss
                    </button>
                </div>
            )}

            {mealPlan && (
                <div className="meal-plan-results">
                    <div className="results-header">
                        <h3 className="results-title">Your Personalized Meal Plan</h3>
                    </div>
                    <div className="meal-plan-content">
                        {formatMealPlan(mealPlan)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MealPlanPage;
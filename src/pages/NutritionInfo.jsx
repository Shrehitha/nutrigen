
// import React, { useState } from 'react';
// import axios from 'axios';
// import './NutritionInfo.css'; // Import the CSS file

// const NutritionInfo = () => {
//     const [query, setQuery] = useState('');
//     const [nutritionData, setNutritionData] = useState(null);

//     // const handleSearch = async () => {
//     //     try {
//     //         const response = await axios.post('http://localhost:5005/api/nutrition', { query });
//     //         setNutritionData(response.data.nutritionData); // Access the nutritionData string
//     //     } catch (error) {
//     //         console.error('Error fetching data:', error);
//     //     }
//     // };
//     const handleSearch = async () => {
//         try {
//             const response = await axios.post('http://localhost:5005/api/nutrition', {
//                 query
//             });

//             if (response.data.error) {
//                 alert(response.data.error); // Show API failure message
//             } else {
//                 setNutritionData(response.data.nutritionData);
//             }

//         } catch (error) {
//             console.error('Error:', error);
//             alert("Failed to fetch nutrition data. Check console for details.");
//         }
//     };

//     // Function to format the nutrition data into HTML
//     const formatNutritionData = (data) => {
//         return data.split('\n').map((line, index) => {
//             if (line.startsWith('**') && line.endsWith('**')) {
//                 // Bold headings
//                 return <h4 key={index} className="section-title">{line.replace(/\*\*/g, '')}</h4>;
//             } else if (line.startsWith('* ')) {
//                 // List items
//                 return <li key={index} className="list-item">{line.replace('* ', '')}</li>;
//             } else if (line.trim() === '') {
//                 // Empty lines (add spacing)
//                 return <br key={index} />;
//             } else {
//                 // Regular paragraphs
//                 return <p key={index} className="paragraph">{line}</p>;
//             }
//         });
//     };

//     return (
//         <div className="nutrition-container">
//             <h2 className="nutrition-title">Nutrition Lookup</h2>
//             <div className="search-container">
//                 <input
//                     type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Enter food item"
//                     className="search-input"
//                 />
//                 <button onClick={handleSearch} className="search-button">
//                     Search
//                 </button>
//             </div>

//             {/* Error Message - Shows when there's an error AND no data */}
//             {nutritionData === null && error && (
//                 <div className="error-message">
//                     <p>Error: {error}</p>
//                 </div>
//             )}

//             {/* Loading State (optional) */}
//             {loading && <p>Loading nutrition data...</p>}

//             {/* Nutrition Results - Shows when data exists */}
//             {nutritionData && (
//                 <div className="nutrition-results">
//                     <h3 className="results-title">Nutritional Information</h3>
//                     <div className="results-data">
//                         {formatNutritionData(nutritionData)}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
// export default NutritionInfo;





//thiisss


import React, { useState } from 'react';
import axios from 'axios';
import './NutritionInfo.css';

const NutritionInfo = () => {
    const [query, setQuery] = useState('');
    const [nutritionData, setNutritionData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setError(null);
        setLoading(true);
        try {
            const response = await axios.post(
                'http://localhost:5005/api/nutrition',
                { query: query.trim() },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.error) {
                setError(response.data.error);
            } else {
                setNutritionData(response.data.nutritionData);
            }
        } catch (err) {
            setError(err.response?.data?.error || "Failed to fetch nutrition data");
            console.error("API Error:", err);
        } finally {
            setLoading(false);
        }
    };

    const formatNutritionData = (data) => {
        if (!data) return null;
        return data.split('\n').map((line, index) => {
            if (line.startsWith('**') && line.endsWith('**')) {
                return <h4 key={index}>{line.replace(/\*\*/g, '')}</h4>;
            } else if (line.startsWith('* ')) {
                return <li key={index}>{line.substring(2)}</li>;
            }
            return <p key={index}>{line}</p>;
        });
    };

    return (
        <div className="nutrition-container">
            <h2>Nutrition Lookup</h2>
            <div className="search-container">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter food item"
                />
                <button
                    onClick={handleSearch}
                    disabled={loading}
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>

            {error && <div className="error">{error}</div>}

            {nutritionData && (
                <div className="results">
                    {formatNutritionData(nutritionData)}
                </div>
            )}
        </div>
    );
};

export default NutritionInfo;
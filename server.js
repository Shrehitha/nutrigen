
// const express = require('express');
// const cors = require('cors');
// const { GoogleGenerativeAI } = require('@google/generative-ai'); // Import GenAI
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// require('dotenv').config(); // Load environment variables from .env file


// // Initialize Express app
// const app = express();
// const PORT = process.env.PORT || 5005;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Initialize Google Generative AI
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root', // Replace with your MySQL username
//     password: '1234567890', // Replace with your MySQL password
//     database: 'nutrigen', // Replace with your database name
// });

// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL database');
// });

// // Signup API
// app.post('/api/signup', (req, res) => {
//     const { name, email, password } = req.body;
//     const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
//     db.query(sql, [name, email, password], (err, result) => {
//         if (err) {
//             return res.status(500).json({ message: 'Signup failed' });
//         }
//         res.status(200).json({ message: 'Signup successful' });
//     });
// });

// // Login API
// app.post('/api/login', (req, res) => {
//     const { email, password } = req.body;
//     const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
//     db.query(sql, [email, password], (err, result) => {
//         if (err || result.length === 0) {
//             return res.status(401).json({ message: 'Login failed' });
//         }
//         res.status(200).json({ message: 'Login successful', user: result[0] });
//     });
// });
// // ... (after all your other middleware and setup code, but BEFORE your routes)

// // Helper: Convert USDA data to text format
// function formatUSDAData(data) {
//     return `
//     **Nutrition Facts for ${data.food}**
//     * Calories: ${data.calories}
//     * Protein: ${data.protein}g
//     * Carbohydrates: ${data.carbs}g
//     * Fat: ${data.fat}g
//     `;
// }

// // Helper: Fetch from USDA API  <--- ADD THE FUNCTION HERE
// async function fetchUSDAData(food) {
//     try {
//         const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search`, {
//             params: {
//                 api_key: process.env.USDA_API_KEY || 'DEMO_KEY',
//                 query: food,
//                 pageSize: 1
//             }
//         });

//         if (!response.data.foods || response.data.foods.length === 0) {
//             throw new Error('No USDA data found for this food');
//         }

//         const nutrients = response.data.foods[0].foodNutrients;
//         return {
//             food: food,
//             calories: nutrients.find(n => n.nutrientName === "Energy")?.value || 'N/A',
//             protein: nutrients.find(n => n.nutrientName === "Protein")?.value || 'N/A',
//             carbs: nutrients.find(n => n.nutrientName === "Carbohydrate, by difference")?.value || 'N/A',
//             fat: nutrients.find(n => n.nutrientName === "Total lipid (fat)")?.value || 'N/A'
//         };
//     } catch (error) {
//         console.error("USDA API Error:", error);
//         throw error;
//     }
// }

// // THEN your /api/nutrition route comes next
// app.post('/api/nutrition', async (req, res) => {
//     // ... existing nutrition route code ...
// });
// // Change from GET to POST to match frontend
// app.post('/api/nutrition', async (req, res) => {
//     console.log("Received body:", req.body);
//     const { query } = req.body; // Now reading from request body

//     try {
//         console.log("Received body:", req.body);
//         const { query } = req.body; // Now reading from request body

//         // Try Gemini first
//         const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
//         const result = await model.generateContent(`Nutrition facts for ${query}`);
//         const nutritionData = result.response.text();

//         res.json({
//             nutritionData, // Keep consistent with frontend expectation
//             source: 'gemini'
//         });

//     } catch (error) {
//         if (error.status === 429) {
//             try {
//                 // Fallback to USDA
//                 const usdaData = await fetchUSDAData(query);
//                 res.json({
//                     nutritionData: formatUSDAData(usdaData), // Convert to text format
//                     source: 'usda'
//                 });
//             } catch (usdaError) {
//                 res.status(500).json({
//                     error: "All APIs failed",
//                     details: usdaError.message
//                 });
//             }
//         } else {
//             res.status(500).json({ error: error.message });
//         }
//     }
// });

// // Helper: Convert USDA data to text format
// function formatUSDAData(data) {
//     return `
//     **Nutrition Facts for ${data.food}**
//     * Calories: ${data.calories}
//     * Protein: ${data.protein}g
//     * Carbohydrates: ${data.carbs}g
//     * Fat: ${data.fat}g
//     `;
// }






// // // Route for nutrition lookup
// // app.post('/api/nutrition', async (req, res) => {
// //     const { query } = req.body;

// //     // Validate input
// //     if (!query || typeof query !== 'string') {
// //         return res.status(400).json({ error: 'Invalid input: query must be a string' });
// //     }

// //     try {
// //         // Get the generative model
// //         const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

// //         // Construct the prompt
// //         const prompt = `Provide detailed nutritional information for ${query}. Include calories, sugar, protein, fat, carbohydrates, and any other relevant nutrients.`;

// //         // Generate content
// //         const result = await model.generateContent(prompt);

// //         // Extract the response
// //         const nutritionData = result.response.text();

// //         // Send the response
// //         res.json({ nutritionData });
// //     } catch (error) {
// //         console.error('Error in /api/nutrition:', error);
// //         res.status(500).json({ error: 'Failed to fetch nutrition data', details: error.message });
// //     }
// // });



// // Start the server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
// });












// Then your other middleware and routes...

// Then your other middleware and routes...


// 3rd 

// const express = require('express');
// const cors = require('cors');
// const { GoogleGenerativeAI } = require('@google/generative-ai');
// const mysql = require('mysql2');
// const axios = require('axios');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// // Initialize Express app
// const app = express();
// const PORT = process.env.PORT || 5005;

// // Middleware
// app.use(cors({
//     origin: 'http://localhost:3000', // Your React frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
// }));
// app.use(express.json());
// // Initialize Google Generative AI
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234567890',
//     database: 'nutrigen',
// });

// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL database');
// });

// // Helper: Convert USDA data to text format
// function formatUSDAData(data) {
//     return `
//     **Nutrition Facts for ${data.food}**
//     * Calories: ${data.calories}
//     * Protein: ${data.protein}g
//     * Carbohydrates: ${data.carbs}g
//     * Fat: ${data.fat}g
//     `;
// }

// // Helper: Fetch from USDA API
// async function fetchUSDAData(food) {
//     try {
//         const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search`, {
//             params: {
//                 api_key: process.env.USDA_API_KEY || 'DEMO_KEY',
//                 query: food,
//                 pageSize: 1
//             }
//         });

//         if (!response.data.foods || response.data.foods.length === 0) {
//             throw new Error('No USDA data found for this food');
//         }

//         const nutrients = response.data.foods[0].foodNutrients;
//         return {
//             food: food,
//             calories: nutrients.find(n => n.nutrientName === "Energy")?.value || 'N/A',
//             protein: nutrients.find(n => n.nutrientName === "Protein")?.value || 'N/A',
//             carbs: nutrients.find(n => n.nutrientName === "Carbohydrate, by difference")?.value || 'N/A',
//             fat: nutrients.find(n => n.nutrientName === "Total lipid (fat)")?.value || 'N/A'
//         };
//     } catch (error) {
//         console.error("USDA API Error:", error);
//         throw error;
//     }
// }

// // Signup API
// app.post('/api/signup', (req, res) => {
//     const { name, email, password } = req.body;
//     const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
//     db.query(sql, [name, email, password], (err, result) => {
//         if (err) {
//             return res.status(500).json({ message: 'Signup failed' });
//         }
//         res.status(200).json({ message: 'Signup successful' });
//     });
// });

// // Login API
// app.post('/api/login', (req, res) => {
//     const { email, password } = req.body;
//     const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
//     db.query(sql, [email, password], (err, result) => {
//         if (err || result.length === 0) {
//             return res.status(401).json({ message: 'Login failed' });
//         }
//         res.status(200).json({ message: 'Login successful', user: result[0] });
//     });
// });

// // Nutrition API with Gemini and USDA fallback
// app.post('/api/nutrition', async (req, res) => {
//     console.log("Received body:", req.body);
//     const { query } = req.body;

//     if (!query) {
//         return res.status(400).json({ error: 'Missing food query parameter' });
//     }

//     try {
//         // Try Gemini first
//         const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
//         const result = await model.generateContent(`Nutrition facts for ${query}`);
//         const nutritionData = result.response.text();

//         res.json({
//             nutritionData,
//             source: 'gemini'
//         });

//     } catch (error) {
//         if (error.status === 429) { // If Gemini quota exceeded
//             try {
//                 // Fallback to USDA
//                 const usdaData = await fetchUSDAData(query);
//                 res.json({
//                     nutritionData: formatUSDAData(usdaData),
//                     source: 'usda'
//                 });
//             } catch (usdaError) {
//                 res.status(500).json({
//                     error: "All APIs failed",
//                     details: {
//                         gemini: error.message,
//                         usda: usdaError.message
//                     }
//                 });
//             }
//         } else {
//             res.status(500).json({
//                 error: "Gemini API failed",
//                 details: error.message
//             });
//         }
//     }
// });

// // app.post("/api/mealplan", async (req, res) => {
// //     const { preferences } = req.body;

// //     try {
// //         const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); // ✅ Correct model name
// //         const prompt = `Generate a 7-day meal plan for someone with the following preferences: ${JSON.stringify(preferences)}`;

// //         const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });

// //         // ✅ Correctly extract the response
// //         const mealPlan = result.response.candidates[0].content.parts[0].text;

// //         res.json({ mealPlan });
// //     } catch (error) {
// //         console.error("Error in /api/mealplan:", error);
// //         res.status(500).json({ error: "Failed to generate meal plan", details: error.message });
// //     }
// // });

// app.post("/api/mealplan", async (req, res) => {
//     const { preferences } = req.body;

//     // Validate input
//     if (!preferences) {
//         return res.status(400).json({ error: "Preferences are required" });
//     }

//     try {
//         const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
//         const prompt = `Generate a detailed 7-day meal plan with recipes for someone with:
//         - Dietary restrictions: ${preferences.dietaryRestrictions || 'none'}
//         - Allergies: ${preferences.allergies || 'none'}
//         - Health conditions: ${preferences.healthConditions || 'none'}
//         - Activity level: ${preferences.activityLevel || 'moderate'}
//         - Calorie goal: ${preferences.calorieGoal || '2000 kcal'}
//         - Age: ${preferences.age || '30'}
//         - Budget: ${preferences.budget || '1500 rupees/week'}

//         Include breakfast, lunch, dinner, and snacks for each day. 
//         Format the response in Markdown with clear headings for each day.`;

//         const result = await model.generateContent(prompt);
//         const mealPlan = result.response.text();

//         res.json({
//             success: true,
//             mealPlan
//         });
//     } catch (error) {
//         console.error("Error in /api/mealplan:", error);
//         res.status(500).json({
//             success: false,
//             error: "Failed to generate meal plan",
//             details: error.message
//         });
//     }
// });


// // Start the server
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on http://localhost:${PORT}`);
// });





const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const mysql = require('mysql2');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const NodeCache = require('node-cache');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5005;

// Cache setup (1 hour TTL)
const mealPlanCache = new NodeCache({ stdTTL: 3600 });

// Rate limiter (2 requests per minute)
const apiLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 2,
    message: {
        error: "Too many requests",
        details: "Please wait a minute before generating another meal plan"
    }
});

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234567890',
    database: 'nutrigen',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Helper functions
function formatUSDAData(data) {
    return `
  **Nutrition Facts for ${data.food}**
  * Calories: ${data.calories}
  * Protein: ${data.protein}g
  * Carbohydrates: ${data.carbs}g
  * Fat: ${data.fat}g
  `;
}

async function fetchUSDAData(food) {
    try {
        const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search`, {
            params: {
                api_key: process.env.USDA_API_KEY || 'DEMO_KEY',
                query: food,
                pageSize: 1
            }
        });

        if (!response.data.foods || response.data.foods.length === 0) {
            throw new Error('No USDA data found for this food');
        }

        const nutrients = response.data.foods[0].foodNutrients;
        return {
            food: food,
            calories: nutrients.find(n => n.nutrientName === "Energy")?.value || 'N/A',
            protein: nutrients.find(n => n.nutrientName === "Protein")?.value || 'N/A',
            carbs: nutrients.find(n => n.nutrientName === "Carbohydrate, by difference")?.value || 'N/A',
            fat: nutrients.find(n => n.nutrientName === "Total lipid (fat)")?.value || 'N/A'
        };
    } catch (error) {
        console.error("USDA API Error:", error);
        throw error;
    }
}

// API Endpoints

// Signup API
app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Signup failed' });
        }
        res.status(200).json({ message: 'Signup successful' });
    });
});

// Login API
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, result) => {
        if (err || result.length === 0) {
            return res.status(401).json({ message: 'Login failed' });
        }
        res.status(200).json({ message: 'Login successful', user: result[0] });
    });
});

// Nutrition API with fallback
app.post('/api/nutrition', async (req, res) => {
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Missing food query parameter' });
    }

    try {
        // Try Gemini Flash model first (cheaper)
        const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash-8b' });
        const result = await model.generateContent(`Nutrition facts for ${query}`);
        const nutritionData = result.response.text();

        res.json({
            nutritionData,
            source: 'gemini'
        });
    } catch (error) {
        if (error.status === 429) {
            try {
                // Fallback to USDA
                const usdaData = await fetchUSDAData(query);
                res.json({
                    nutritionData: formatUSDAData(usdaData),
                    source: 'usda'
                });
            } catch (usdaError) {
                res.status(500).json({
                    error: "All APIs failed",
                    details: usdaError.message
                });
            }
        } else {
            res.status(500).json({
                error: "Gemini API failed",
                details: error.message
            });
        }
    }
});

// Meal Plan API with caching and rate limiting
app.post("/api/mealplan", apiLimiter, async (req, res) => {
    const { preferences } = req.body;

    if (!preferences) {
        return res.status(400).json({ error: "Preferences are required" });
    }

    // Check cache first
    const cacheKey = JSON.stringify(preferences);
    const cached = mealPlanCache.get(cacheKey);
    if (cached) {
        return res.json({
            success: true,
            mealPlan: cached,
            cached: true
        });
    }

    try {
        // Use cheaper Flash model
        const model = genAI.getGenerativeModel({
            model: "models/gemini-1.5-flash-8b",
            generationConfig: {
                temperature: 0.7,
                topP: 0.9,
                topK: 30
            }
        });

        const prompt = `Generate a 7-day  meal plan for a person living in india with:
    - Diet: ${preferences.dietaryRestrictions || 'balanced'}
    - Calories: ${preferences.calorieGoal || 2000} kcal
    - Allergies: ${preferences.allergies || 'none'}
    - Budget: ${preferences.budget || 'moderate'}
    - Health Conditions: ${preferences.healthConditions || 'none'}
    -Prices should be in INR (Indian Rupees)
    -the entire week budger togther should not exceed the budget provided(make sure of it )
    -make sure the food is good for them based on their health conditions
    -provide number of calories for every recipe along with portion size
    Format as Markdown with daily sections.`;

        const result = await model.generateContent(prompt);
        const mealPlan = result.response.text();

        // Cache the result
        mealPlanCache.set(cacheKey, mealPlan);

        res.json({
            success: true,
            mealPlan
        });
    } catch (error) {
        console.error("Meal plan error:", error);

        // Local fallback plans
        const fallbackPlans = {
            vegetarian: "## Vegetarian Plan\n...",
            "low-carb": "## Low-Carb Plan\n..."
        };

        const fallbackKey = preferences.dietaryRestrictions || 'balanced';
        if (fallbackPlans[fallbackKey]) {
            return res.json({
                success: true,
                mealPlan: fallbackPlans[fallbackKey],
                fallback: true
            });
        }

        res.status(500).json({
            success: false,
            error: "Failed to generate meal plan",
            details: error.message
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
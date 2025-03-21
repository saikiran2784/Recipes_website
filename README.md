# Recipe Website

This is a simple Recipe Website that allows users to search for their favorite recipes and view detailed instructions and ingredients. It fetches recipe data from the [TheMealDB API](https://www.themealdb.com/) and displays relevant recipes interactively.

## Features
- 🔍 **Search for Recipes**: Find your favorite dishes using the search bar.
- 🖼 **Display Recipes**: Shows images, origin, and category of each recipe.
- 📜 **View Recipe Details**: Displays ingredients and step-by-step instructions.
- 📱 **Responsive Design**: Works smoothly on all screen sizes.

## Technologies Used
- **HTML** - Structuring the web page.
- **CSS** - Styling and responsiveness.
- **JavaScript** - Handling user interactions and API requests.
- **TheMealDB API** - Fetching recipe data dynamically.
- **Font Awesome** - For icons.

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/recipe-website.git
   ```
2. Navigate to the project directory:
  ```bash
  cd recipe-website
  ```
3. Open the index.html file in a web browser.

## How It Works

1. Enter a dish name in the search bar.

2. Click the Search button to fetch relevant recipes.

3. Click View Recipe to see detailed instructions and ingredients.

4. Close the recipe popup by clicking the close button.

## File Structure
```
recipe-website/
│── index.html        # Main HTML file
│── style.css         # Styling for the website
│── script.js         # JavaScript logic for fetching and displaying recipes
│── README.md         # Documentation
```

## API Usage

1. The website fetches recipes from TheMealDB API using the endpoint:
  ```bash
  https://www.themealdb.com/api/json/v1/1/search.php?s=<recipe_name>
  ```
2. The API returns a JSON object containing meal details like name, category, origin, ingredients, and cooking instructions.

## Future Enhancements

⭐ Implement a Favorites feature to save preferred recipes.

🔥 Add filters for categories and cuisines.

🎨 Improve UI/UX with animations and better styling.

## License

This project is open-source and available under the MIT License.

## Author

Developed by Nichenametla Sai Kiran. Feel free to reach out for suggestions or improvements!

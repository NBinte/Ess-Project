# **Restaurant List App - React**

## **Overview**
This is a simple React application that displays a list of restaurants. The data is manually provided in a local JSON file (`restaurants.json`), simulating an API response. Each restaurant is displayed as a card with details such as name, price, image, and tags.

---

## **Features**
- Dynamic rendering of restaurant cards from a JSON file.
- Uses `React` and basic `CSS` styling.
- Displays a restaurant count based on the available data.
- Responsive design for displaying restaurant cards.

---

## **Prerequisites**
- Node.js (>=12.x.x)
- npm (>=6.x.x)

---

## **Setup and Installation**

### 1. Clone the Repository

If you haven't already cloned the repository, run the following command in your terminal:

```bash
git clone https://github.com/NBinte/Ess-Project
cd <your-project-folder>
```

2. Install Dependencies

Install all the necessary dependencies with npm:

```

npm install

```

3. Running the Application

After the dependencies are installed, run the development server:

```
npm start
```

This will start the React app on your local server, usually accessible at http://localhost:8080

4. Viewing the Application

Open your browser and go to http://localhost:8080 to see the application running with a list of restaurant cards.

## How It Works

The restaurant data is stored in a local JSON file (restaurants.json).

In the RestaurantList component, the JSON data is imported and used to dynamically generate the restaurant cards using RestaurantCard.

Each RestaurantCard displays the restaurant's name, price, image, and tags.

## Example of JSON Structure (restaurants.json)

```
[
  {
    "name": "Burrito Kitchen",
    "imageUrl": "https://example.com/image.jpg",
    "price": 2,
    "tags": ["Mexican", "Burritos", "Halal"]
  },
  {
    "name": "Pure",
    "imageUrl": "https://example.com/image2.jpg",
    "price": 2,
    "tags": ["Salads", "Gluten Free", "Smoothies"]
  },
  ...
]
```

## Styling

Basic CSS styling is included for layout and design.

Customizations to the styles can be added in the styles.css file.

## Testing

To run tests (if any are set up), you can use the following command:

```
npm test
```

## Known Issues

Currently, the app uses mock data and doesn’t fetch from an actual API.

No advanced error handling for missing or incomplete data in the JSON file.
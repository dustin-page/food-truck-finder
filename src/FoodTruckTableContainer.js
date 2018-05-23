import React from 'react';

//Reference for food truck list: 
//https://www.foodtrucksin.com/city/minneapolis_mn

//References for building list
//https://reactjs.org/docs/thinking-in-react.html
//https://codepen.io/gaearon/pen/BwWzwm

class FoodTruckTable extends React.Component {
    render() {
        const rows = [];
        let lastAlphaList = null;

        this.props.foodTrucks.forEach((foodTruck) => {
            console.log(foodTruck);
            if (foodTruck.alphaList !== lastAlphaList) {
                rows.push(
                    <tr key={foodTruck.alphaList +'_'+ foodTruck.id}>
                        <td colSpan="3">{foodTruck.alphaList}</td>
                    </tr>
                );
            }

            rows.push(
                <tr key={foodTruck.name +'_'+ foodTruck.id}>
                    <td>{foodTruck.name}</td>
                    <td>{foodTruck.location}</td>
                </tr>
            );

            lastAlphaList = foodTruck.alphaList;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Food Truck</th>
                        <th>Location</th>
                        <th>Cuisine</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <form>
                <input type="text" name="searchFoodTrucks" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show food trucks in St. Paul
            </p>
            </form>
        );
    }
}

export default class FoodTruckTableContainer extends React.Component {
    render() {
        return (
            <div className="food-truck-list-container">
                <SearchBar />
                <FoodTruckTable foodTrucks={FoodTrucks} />
                <div className="food-truck-alpha-list-heading">A</div>
                <ul className="food-truck-list">
                    <li>Chef Shack</li>
                    <li>Hola Arepa Food Truck</li>
                    <li>Hot Indian Foods</li>
                    <li>O'Cheeze</li>
                    <li>Potter's Pasties and Pies</li>
                </ul>
            </div>
        );
    }
}

const FoodTrucks = [
    {
        "id": 1,
        "alphaList": "C",
        "cuisine": "American",
        "foodType": "Sandwiches",
        "location": "St. Paul, Minnesota",
        "name": "Chef Shack",
        "description": "Chef Shack is a mobile kitchen serving up some of the tastiest street food in Minneapolis."
    },
    {
        "id": 2,
        "alphaList": "H",
        "cuisine": "Venezuelan",
        "foodType": "Sandwiches",
        "location": "Minneapolis, Minnesota",
        "name": "Hola Arepa Food Truck",
        "description": "Hola Arepa specializes in arepas which are cornmeal griddle cake Venezuelan sandwiches that are split open and stuffed with delicious Latin-style filling."
    },
    {
        "id": 3,
        "alphaList": "H",
        "cuisine": "Indian",
        "foodType": "Indian Burritos",
        "location": "Minneapolis, Minnesota",
        "name": "Hot Indian Foods",
        "description": "The first and only Indian food truck in the Twin Cities!"
    },
    {
        "id": 4,
        "alphaList": "O",
        "cuisine": "American",
        "foodType": "Grilled Cheese, Comfort Food",
        "location": "Minneapolis, Minnesota",
        "name": "O'Cheeze",
        "description": "We are a grilled cheese food truck serving the Minneapolis/St. Paul area! We post our whereabouts so you can come see us and enjoy a sandwich and some soup!"
    },
    {
        "id": 5,
        "alphaList": "P",
        "cuisine": "British",
        "foodType": "Pasties",
        "location": "Minneapolis, Minnesota",
        "name": "Potter's Pasties and Pies",
        "description": "We are an underground pasty shop at 1828 Como Ave Minneapolis & food trucks, serving British style pasties with a real Brit on board. Mum would be proud."
    },
    {
        "id": 6,
        "alphaList": "S",
        "cuisine": "American",
        "foodType": "Sandwiches",
        "location": "Minneapolis, Minnesota",
        "name": "Sasquatch Sandwiches",
        "description": "Sasquatch Sandwiches is a collaboration effort started by Gil Gaitan along with his family and friends in the Twin Cities Area."
    }
];
import React, { useState, useEffect } from 'react';
import './App.css';

const carsDB = [
  {
    vehicle: {
      type: 'taxi',
      make: 'Webville Motors',
      model: 'cars',
      year: 1955,
      color: 'yellow',
      passengers: 4,
      convertible: false,
      mileage: 281341,
    },
  },
  {
    vehicle: {
      type: 'cadi',
      make: 'GM',
      model: 'Cadillac',
      year: 1955,
      color: 'tan',
      passengers: 5,
      convertible: false,
      mileage: 12892,
    },
  },
  {
    vehicle: {
      type: 'fiat',
      make: 'Fiat',
      model: '500',
      year: 1957,
      color: 'Medium Blue',
      passengers: 2,
      convertible: false,
      mileage: 88000,
    },
  },
  {
    vehicle: {
      type: 'chevy',
      make: 'Chevy',
      model: 'Bel Air',
      year: 1957,
      color: 'red',
      passengers: 2,
      convertible: false,
      mileage: 1021,
    },
  },
];

function App() {
  const [cars, setCars] = useState(carsDB);
  const [goodCars, setGoodCars] = useState([]);

  useEffect(() => {
    let newArray = [];
    for (let i = 0; i < cars.length; i++) {
      let each = {};
      each = worthALook(cars[i]);
      if (each) {
        newArray.push(each);
      }
      setGoodCars(newArray);
    }
  }, []);

  function prequal(car) {
    if (car.vehicle.mileage > 10000) {
      return false;
    } else if (car.vehicle.year > 1960) {
      return false;
    }
    return true;
  }

  function worthALook(cars) {
    var x = prequal(cars);
    if (x === true) {
      console.log(cars);
      return cars;
    } else {
      console.log('You should really pass on the...');
    }
  }

  return (
    <div className='App'>
      <h3>All Cars</h3>
      <h6>
        {cars.map((car, i) => (
          <div key={i}>{car.vehicle.make}</div>
        ))}
      </h6>
      <h3>Cars Worth A Look</h3>
      <h6>
        {goodCars.map((car, i) => (
          <div key={i}>{car.vehicle.make}</div>
        ))}
      </h6>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData, getWeatherData } from '../api';

import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map.jsx';



const LocationPage = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setchildClicked] = useState({});

  // set coordinates dynamically using useState
  const [coordinates, setCoordinates] = useState({
    // lat: 0,
    // lng: 0,
    // lat: 43.16342,
    // lng: -1.2358,
  });
  // set google maps window boundries
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  

  // to get users current location use browser built in location API
  useEffect(() => {
    // destructure to get coordinates and destructure again for lat & long
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);



  useEffect(
    () => {
      if (bounds.sw && bounds.ne) {
        setIsLoading(true);

        getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
          setWeatherData(data)
        );

        getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
          setPlaces(
            data?.filter((place) => place.name && place.num_reviews > 0)
          );
          setFilteredPlaces([]);
          setIsLoading(false);
        });
      }
    },
    // rerun the code everytime the map changes
    [type, bounds]
  );

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />

      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setchildClicked={setchildClicked}
            weatherData={weatherData}
          />
        </Grid>


      </Grid>
    </>

  );
};

export default LocationPage;

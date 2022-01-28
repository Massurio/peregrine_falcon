import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core'; 
import { getPlacesData, getWeatherData } from '../api';
import { getLocationData } from '../utils/getContent';

import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map.jsx';
import './LocationPage.css';



const LocationPage = ({ user, locationData }) => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setchildClicked] = useState({});
//   const [locationData, setLocationData] = useState();

  const [coordinates, setCoordinates] = useState({
    lat: 43.16342,
    lng: -1.2358,
  });
  // set google maps window boundries
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  


  // to get users current location use browser built in location API
//   useEffect(() => {
//     // destructure to get coordinates and destructure again for lat & long
//     navigator.geolocation.getCurrentPosition(
//       ({ coords: { latitude, longitude } }) => {
//         setCoordinates({ lat: latitude, lng: longitude });
//       }
//     );
//   }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
 
  }, [rating]); // eslint-disable-line react-hooks/exhaustive-deps



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
    [type, bounds]);  // eslint-disable-line react-hooks/exhaustive-deps
//   useEffect(() => {
//        getLocationData(setLocationData);

//              }, []
//       );
  
  let albergueArray = locationData.locationAlbergueData[0].fredalbergue;
  // console.log(albergueArray);
//   console.log(locationData);
    
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

      <h4>List of local Albergues</h4>
 <table>
  <tr>
    <th>Name</th>
    <th>Address</th>
    <th>Price</th>
	<th>Notes</th>
    <th>Beds</th>
    <th>Opening Period</th>
	<th>Email</th>
    <th>Booking Link</th>
    <th>Phone Number</th>
	<th>Comments</th>
  </tr>

  {albergueArray.map((item, index) => {
    const rate = "€"+ Math.round(item.onedPersonRateMin);
    const beds = item.numberOfBeds + "÷" + item.numberOfDorms;
    const email = item.email;
	const href1 = item.albergueWebsiteURL;
    const href2 = item.albergueBookingDotComURL+"?aid=1627093";
    const phone = "+"+item.tel1CountryCode+" "+item.tel1PhoneNumber;
    const text1 = "tel:"+phone;
	const text2 = "mailto:"+email;
            return (
          <>
          <tr key={index}>
          <td><u><a href={href1}>{item.albergueName}</a></u></td> 
          <td>{item.albergueStreetAdress}</td>
          <td>{rate}</td>
		  <td>{item.rateNotes}</td>
          <td>{beds}</td>
          <td>{item.openingPeriod}</td>
		  <td><u><a href={text2}>{email}</a></u></td>
          <td><u><a href={href2}>Booking</a></u></td>
          <td><u><a href={text1}>{phone}</a></u></td>
		  <td>{item.albergueAdditionalComments}</td>
            </tr> 

          </>
        )})}
  </table>


    </>

  );
};

export default LocationPage;

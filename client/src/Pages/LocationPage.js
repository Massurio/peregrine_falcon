import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData, getWeatherData } from '../api';
import { getLocationData } from '../utils/getContent';

import Header from '../components/Header/Header';
import List from '../components/List/List';
import Map from '../components/Map/Map.jsx';



const LocationPage = ({user}) => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setchildClicked] = useState({});
  const [locationData, setLocationData] = useState();

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
  useEffect(() => {
       getLocationData(setLocationData);
             }, []
      );
  
  // const albergueArray = locationData.locationAlbergueData[0].fredalbergue;
  // console.log(albergueArray);
  console.log(locationData);
  // BELOW is data manually added to test
  const albergueArray =  
 [
      {
        "ID": 1,
        "albergueName": "Municipal Albergue",
        "numberOfBeds": 32,
        "numberOfDorms": 3,
        "albergueStreetAdress": "55, rue de la Citadelle",
        "onedPersonRateMin": "12.00",
        "onedPersonRateMax": null,
        "twoPersonRateMin": "30.00",
        "twodPersonRateMax": null,
        "rateNotes": "Advance reservation not permitted. One double room available.",
        "kitchenFacilitiesAvailable": true,
        "washingMachineAvailable": true,
        "dryingMachineAvailable": true,
        "communalMealAvailable": false,
        "openingPeriod": "Open all year",
        "openingTimes": "Check-in from 14:00 to 20:30",
        "email": null,
        "tel1CountryCode": 33,
        "tel1PhoneNumber": 617103189,
        "tel2CountryCode": null,
        "tel2PhoneNumber": null,
        "albergueWebsiteURL": "https://www.terresdenavarre.fr/ospitalia-refuge-municipal-les-chemins-de-st-jacques/presentation-du-refuge/",
        "albergueBookingDotComURL": null,
        "albergueAdditionalComments": null,
        "Location2albergues": {
          "locationID": 1,
          "albergueID": 1,
          "LocationID": 1,
          "AlbergueID": 1
        }
      }
      ,
					{
						"ID": 2,
						"albergueName": "Refuge Kaserna (parish albergue)",
						"numberOfBeds": 14,
						"numberOfDorms": 2,
						"albergueStreetAdress": "43, rue d'Espagne",
						"onedPersonRateMin": "20.00",
						"onedPersonRateMax": null,
						"twoPersonRateMin": null,
						"twodPersonRateMax": null,
						"rateNotes": "Half board",
						"kitchenFacilitiesAvailable": false,
						"washingMachineAvailable": true,
						"dryingMachineAvailable": true,
						"communalMealAvailable": true,
						"openingPeriod": "April - October",
						"openingTimes": "Check-in from 15:00 to 20:00",
						"email": null,
						"tel1CountryCode": 33,
						"tel1PhoneNumber": 559376517,
						"tel2CountryCode": null,
						"tel2PhoneNumber": null,
						"albergueWebsiteURL": null,
						"albergueBookingDotComURL": null,
						"albergueAdditionalComments": null,
						"Location2albergues": {
							"locationID": 1,
							"albergueID": 2,
							"LocationID": 1,
							"AlbergueID": 2
						}
					},
					{
						"ID": 3,
						"albergueName": "Gîte Beilari ",
						"numberOfBeds": 14,
						"numberOfDorms": 4,
						"albergueStreetAdress": "40, rue de la Citadelle",
						"onedPersonRateMin": "40.00",
						"onedPersonRateMax": null,
						"twoPersonRateMin": null,
						"twodPersonRateMax": null,
						"rateNotes": "Half board",
						"kitchenFacilitiesAvailable": false,
						"washingMachineAvailable": false,
						"dryingMachineAvailable": false,
						"communalMealAvailable": true,
						"openingPeriod": "March 15 - October",
						"openingTimes": "Check-in from 14:30 to 22:00",
						"email": "info@beilari.info",
						"tel1CountryCode": 33,
						"tel1PhoneNumber": 559372468,
						"tel2CountryCode": null,
						"tel2PhoneNumber": null,
						"albergueWebsiteURL": "https://www.beilari.info/fr",
						"albergueBookingDotComURL": null,
						"albergueAdditionalComments": null,
						"Location2albergues": {
							"locationID": 1,
							"albergueID": 3,
							"LocationID": 1,
							"AlbergueID": 3
						}
					},
					{
						"ID": 4,
						"albergueName": "Gîte Azkorria ",
						"numberOfBeds": 8,
						"numberOfDorms": 1,
						"albergueStreetAdress": "50, rue de la Citadelle",
						"onedPersonRateMin": "28.00",
						"onedPersonRateMax": "67.00",
						"twoPersonRateMin": "74.00",
						"twodPersonRateMax": null,
						"rateNotes": "B&B",
						"kitchenFacilitiesAvailable": false,
						"washingMachineAvailable": false,
						"dryingMachineAvailable": false,
						"communalMealAvailable": false,
						"openingPeriod": null,
						"openingTimes": null,
						"email": null,
						"tel1CountryCode": 33,
						"tel1PhoneNumber": 559370053,
						"tel2CountryCode": 33,
						"tel2PhoneNumber": 621169476,
						"albergueWebsiteURL": null,
						"albergueBookingDotComURL": null,
						"albergueAdditionalComments": null,
						"Location2albergues": {
							"locationID": 1,
							"albergueID": 4,
							"LocationID": 1,
							"AlbergueID": 4
						}
					},
					{
						"ID": 5,
						"albergueName": "Gîte de la Porte Saint Jacques",
						"numberOfBeds": 12,
						"numberOfDorms": 2,
						"albergueStreetAdress": "51, rue de la Citadelle",
						"onedPersonRateMin": "25.00",
						"onedPersonRateMax": null,
						"twoPersonRateMin": null,
						"twodPersonRateMax": null,
						"rateNotes": "B&B",
						"kitchenFacilitiesAvailable": true,
						"washingMachineAvailable": false,
						"dryingMachineAvailable": false,
						"communalMealAvailable": false,
						"openingPeriod": "March - October",
						"openingTimes": "Check-in from 14:00 to 20:30",
						"email": "giteportesaintjacques@gmail.com",
						"tel1CountryCode": 33,
						"tel1PhoneNumber": 630997561,
						"tel2CountryCode": null,
						"tel2PhoneNumber": null,
						"albergueWebsiteURL": "https://www.facebook.com/Gite-de-la-Porte-Saint-Jacques-2096243980596653/",
						"albergueBookingDotComURL": "https://www.booking.com/hotel/fr/gite-de-la-porte-saint-jacques.en-gb.html",
						"albergueAdditionalComments": null,
						"Location2albergues": {
							"locationID": 1,
							"albergueID": 5,
							"LocationID": 1,
							"AlbergueID": 5
						}
					},
					{
						"ID": 6,
						"albergueName": "Gîte Makila ",
						"numberOfBeds": 12,
						"numberOfDorms": 3,
						"albergueStreetAdress": "35, rue de la Citadelle",
						"onedPersonRateMin": "25.00",
						"onedPersonRateMax": "28.00",
						"twoPersonRateMin": "65.00",
						"twodPersonRateMax": "70.00",
						"rateNotes": "B&B / Single beds available",
						"kitchenFacilitiesAvailable": true,
						"washingMachineAvailable": true,
						"dryingMachineAvailable": true,
						"communalMealAvailable": false,
						"openingPeriod": "March - October",
						"openingTimes": "Check-in from 14:30 to 21:00",
						"email": "info@makila.saintjean.com",
						"tel1CountryCode": 33,
						"tel1PhoneNumber": 663101346,
						"tel2CountryCode": 33,
						"tel2PhoneNumber": 559371414,
						"albergueWebsiteURL": "https://makila-saintjean.com/en/",
						"albergueBookingDotComURL": "https://www.booking.com/hotel/fr/makila-saint-jean-pied-de-port.html",
						"albergueAdditionalComments": null,
						"Location2albergues": {
							"locationID": 1,
							"albergueID": 6,
							"LocationID": 1,
							"AlbergueID": 6
						}
					},
					{
						"ID": 7,
						"albergueName": "Gîte Le Lièvre et La Tortue",
						"numberOfBeds": 15,
						"numberOfDorms": 3,
						"albergueStreetAdress": "30, rue de la Citadelle",
						"onedPersonRateMin": "18.00",
						"onedPersonRateMax": "25.00",
						"twoPersonRateMin": null,
						"twodPersonRateMax": null,
						"rateNotes": "B",
						"kitchenFacilitiesAvailable": false,
						"washingMachineAvailable": true,
						"dryingMachineAvailable": true,
						"communalMealAvailable": true,
						"openingPeriod": "March - October",
						"openingTimes": "Checkin from 16:00",
						"email": "gite.lelievreetlatortue@gmail.com",
						"tel1CountryCode": 33,
						"tel1PhoneNumber": 659135225,
						"tel2CountryCode": 33,
						"tel2PhoneNumber": 663629235,
						"albergueWebsiteURL": "https://www.facebook.com/gitelelievreetlatortue/",
						"albergueBookingDotComURL": null,
						"albergueAdditionalComments": null,
						"Location2albergues": {
							"locationID": 1,
							"albergueID": 7,
							"LocationID": 1,
							"AlbergueID": 7
						}
					},
					{
						"ID": 8,
						"albergueName": "Gîte Ultreia ",
						"numberOfBeds": 7,
						"numberOfDorms": 1,
						"albergueStreetAdress": "8, rue de la Citadelle",
						"onedPersonRateMin": "23.00",
						"onedPersonRateMax": null,
						"twoPersonRateMin": "56.00",
						"twodPersonRateMax": "69.00",
						"rateNotes": "B&B / Mainly signle beds.",
						"kitchenFacilitiesAvailable": true,
						"washingMachineAvailable": true,
						"dryingMachineAvailable": true,
						"communalMealAvailable": false,
						"openingPeriod": "mid March - mid October",
						"openingTimes": "Check-in from 15:00 to 20:00",
						"email": "gite.ultreia@vertesmontagnes.fr",
						"tel1CountryCode": 33,
						"tel1PhoneNumber": 680884622,
						"tel2CountryCode": null,
						"tel2PhoneNumber": null,
						"albergueWebsiteURL": "www.ultreia64.fr/en",
						"albergueBookingDotComURL": null,
						"albergueAdditionalComments": null,
						"Location2albergues": {
							"locationID": 1,
							"albergueID": 8,
							"LocationID": 1,
							"AlbergueID": 8
						}
					}
    ];
    
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
    <th>Beds</th>
    <th>Opening Period</th>
    <th>Booking Link</th>
    <th>Phone Number</th>
  </tr>
  {albergueArray.map((item, index) => {
    const rate = "€"+ Math.round(item.onedPersonRateMin);
    const beds = item.numberOfBeds + "÷" + item.numberOfDorms;
    const href1 = item.albergueWebsiteURL;
    const href2 = item.albergueBookingDotComURL;
    const phone = "+"+item.tel1CountryCode+" "+item.tel1PhoneNumber;
    const text1 = "tel:"+phone;
            return (
          <>
          <tr key={index}>
          <td><u><a href={href1}>{item.albergueName}</a></u></td> 
          <td>{item.albergueStreetAdress}</td>
          <td>{rate}</td>
          <td>{beds}</td>
          <td>{item.openingPeriod}</td>
          <td><u><a href={href2}>Booking</a></u></td>
          <td><u><a href={text1}>{phone}</a></u></td>
            </tr> 

          </>
        )})}
  </table>


    </>

  );
};

export default LocationPage;

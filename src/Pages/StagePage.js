import React, { useState, useEffect } from 'react';

import { getStageData } from '../utils/getContent';


export default function StagePage({user}) {
  const [stageData,setStageData] = useState(
    {stageData: [
       {
        ID: 1,
        stageName: "Name of the Stage",
        stageDistanceInMetres: 23000,
        stageTimeInMinutes: 300,
        stageStartLocationID: 1,
        stageFinishLocationID: 99,
        stageMapURL:null,
        stageElevationChartURL: null,
        Locations: [
          {
            locID: 999,
            locationName: "Location Name",
            latitude : "43.16350",
            longitude: "-1.23502",
            locationPic1URL: null,
            locationPic2URL: null,
            locationPic3URL: null,
            locationPic4URL: null,
            Stage2locations: {
              stageID: 1,
              locationID: 1,
              distanceFromPriorLocationInMetres: 4000,
              timeFromPriorLocationInMinutes: 70,
              StageID: 1,
              LocationID: 1,
            }}
          ]
        }
            ]}
    )


  useEffect(() => {
    getStageData(setStageData);
      }, []);

      const mainStageData = stageData.stageData[0];
      const stageMapURL =mainStageData.stageMapURL;
      const stageElevationChartURL =mainStageData.stageElevationChartURL;
      const stageDestinationID = mainStageData.Locations.length-1;
      const stageDestinationLatitude = parseFloat(mainStageData.Locations[stageDestinationID].latitude); 
      const stageDestinationLongitude = parseFloat(mainStageData.Locations[stageDestinationID].longitude);
      const startLatitude = parseFloat(mainStageData.Locations[0].latitude);
      const startLongitude = parseFloat(mainStageData.Locations[0].longitude);
      const distance = Math.round(mainStageData.stageDistanceInMetres/100)/10;
      const distanceInMiles = Math.round((mainStageData.stageDistanceInMetres/1609.34)*10)/10
      const hours = Math.floor(mainStageData.stageTimeInMinutes/60);
      const minutes = mainStageData.stageTimeInMinutes - (hours*60);
      const hrefText1 = "https://www.google.com/maps/dir/?api=1&travelmode=walking&destination="+startLatitude+","+startLongitude;
      const hrefText2 = "https://www.google.com/maps/dir/?api=1&travelmode=walking&destination="+stageDestinationLatitude+","+stageDestinationLongitude;


  return (
  <div>
      <h1>Stage Page </h1>
      <p>Overall distance = {distance} kilometres or {distanceInMiles} miles</p>
      <p> Estimated duration = {hours} hours and {minutes} minutes</p>
      <p>Starting GPS location = <u><a href={hrefText1}>{startLatitude},{startLongitude}</a></u></p>
      <p>Destination GPS location = <u><a href={hrefText2}>{stageDestinationLatitude},{stageDestinationLongitude}</a></u></p>
      <br></br>
  
  
      {stageData.stageData.map((myItem, index) => {
        return (
          <>
            {myItem.Locations.map((nestedItem, nestedIndex) => {
                const locationData = {nestedItem};
                const kmDistance = Math.round(locationData.nestedItem.Stage2locations.distanceFromPriorLocationInMetres/100)/10;
                const distanceInMiles = Math.round(locationData.nestedItem.Stage2locations.distanceFromPriorLocationInMetres/1609.34*10)/10;
                const hours = Math.floor(locationData.nestedItem.Stage2locations.timeFromPriorLocationInMinutes/60);
                const minutes = Math.floor(locationData.nestedItem.Stage2locations.timeFromPriorLocationInMinutes-(hours*60));
                const toLocation = locationData.nestedItem.locationName;
                let myIndex = nestedIndex-1;
                if (myIndex < 0){myIndex = 0};
                const fromLocation = stageData.stageData[0].Locations[myIndex].locationName;
                let lineText = fromLocation+" to "+toLocation+" = "+kmDistance+" km or "+distanceInMiles+" miles. Walking time= "+hours+" hours and "+minutes+" minutes";
                if (nestedIndex == 0 ) {
                  {lineText = "STAGE DISTANCES AND WALKING TIMES"};
                };
              return (
                <>
                <p key={nestedIndex}>{lineText}</p>
                </>
              );
            })}
          </>
        );
      })}
         <img src={stageMapURL} alt="Stage Map" width="800px" />
         <br></br>
         <img src={stageElevationChartURL} alt="Stage Map" width="800px" />
    </div>
  );
};
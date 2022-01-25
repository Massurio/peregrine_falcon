import React, { useState, useEffect } from 'react';

import { getStageLocationData, getStageBasicData } from '../utils/getContent';


export default function StagePage() {
  const [stageBasicData, setStageBasicData] = useState({});
  const [stageLocationData, setStageLocationData] = useState({});
  useEffect(() => {
    getStageBasicData(setStageBasicData);
      }, []);
  useEffect(() => {
    getStageLocationData(setStageLocationData);
      }, []);
      const distance = Math.round(stageBasicData.stageDistanceInMetres/100)/10;
      const distanceInMiles = Math.round((stageBasicData.stageDistanceInMetres/1609.34)*10)/10
      const hours = Math.floor(stageBasicData.stageTimeInMinutes/60);
      const minutes = stageBasicData.stageTimeInMinutes - (hours*60);
      const myStageData = stageBasicData
      console.log(myStageData);
  return (
    <><div>
      <h1>Stage Page </h1>
      <p>Overall distance = {distance} kilometres or {distanceInMiles} miles</p>
      <p> Estimated duration = {hours} hours and {minutes} minutes</p>
     </div>
  
      </>
  );
}

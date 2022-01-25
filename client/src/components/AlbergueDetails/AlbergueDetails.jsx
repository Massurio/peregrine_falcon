import React, { useState, useEffect} from 'react';
import { getLocationData } from '../../utils/getContent';

const AlbergueDetail = () => {
    const [locationData, setLocationData] = useState({});
    useEffect(() => {
      getLocationData(setLocationData);
        }, []);
    const albergueArray = locationData.locationData.locationAlbergueData[0].locationName;
    console.log(albergueArray);

  // locationData.locationAlbergueData[0].fredalbergue;
  return (
        <p>
            Hello
        </p>)
};


export default AlbergueDetail;
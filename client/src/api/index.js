import axios from 'axios'

// GET request copied from travel advisors list in boundry API
// Create const that will make api call and export it
export const getPlacesData = async (type, sw, ne) => {
  try {
    // request and await get call to URL
    // destructure data twice to get to restaurants
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    )

    return data
  } catch (error) {
    console.log(error)
  }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      'https://community-open-weather-map.p.rapidapi.com/find',
      {
        params: { lon: lng, lat: lat },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    )

    return data
  } catch (error) {
    console.log(error)
  }
}

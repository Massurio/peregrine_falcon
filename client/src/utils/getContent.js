export const getLocationData = async (setLocationData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}location`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    const myData = data.locationData;
    setLocationData(myData);
  } catch (error) {
    console.log(error);
  }
};

export const getLocationData2 = async (setLocationData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}location`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
   let myData = data.locationData;
    setLocationData(myData);
  } catch (error) {
    console.log(error);
  }
};

export const getStageBasicData = async (setStageBasicData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}stage`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
      });
      const data = await response.json();
      const myTemp = data.stageData[0]
      setStageBasicData(myTemp);
    } catch (error) {
      console.log(error);
    }
  };

  export const getStageLocationData = async (setStageLocationData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_REST_API}stage`, {
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
      });
      const data = await response.json();
      const myTemp = data.stageData[0].locations
      setStageLocationData(myTemp);
    } catch (error) {
      console.log(error);
    }
  };
  
export const getStageData = async (setStageData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}stage`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    setStageData(data);
  } catch (error) {
    console.log(error);
  }
};

export const setPreviousData = (previousStage, setPreviousStage) => {
  try {
    console.log(previousStage);
    setPreviousStage(previousStage);
    console.log(previousStage);
  } catch (error) {
    console.log(error);
  }
};
import axios from 'axios';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('/data.json'); 
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export const FETCH_LOCATION = 'FETCH_LOCATION';

const fetchLocation = (data) => ({
  type: FETCH_LOCATION,
  payload: data,
});

// dispatch( action )
export const fetchLocationThunk = () => {
  console.log('antes do retorno');
  return async (dispatch) => {
    // faz um monte de coisas
    const apiData = await fetch('http://api.open-notify.org/iss-now.json');
    const { iss_position: issPosition } = await apiData.json();
    const data = {
      latitude: Number(issPosition.latitude),
      longitude: Number(issPosition.longitude),
    };
    // mas no final envia os dados
    dispatch(fetchLocation(data));
  };
};

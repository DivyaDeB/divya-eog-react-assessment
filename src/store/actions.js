export const API_ERROR = "EVENT/API_ERROR_RECEIVED";
export const WEATHER_DATA_RECEIVED = "EVENT/WEATHER_DATA_RECEIVED";

export const apiError = error => ({
  type: API_ERROR,
  payload: { error }
});

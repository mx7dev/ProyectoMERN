const initialState = {
    messages: [],
    isLoading: false,
    error: null,
  };

const messageReducer =  (state = initialState, { type, payload })=> {
  switch (type) {
    default:
      return state;
  }
}
export default messageReducer;
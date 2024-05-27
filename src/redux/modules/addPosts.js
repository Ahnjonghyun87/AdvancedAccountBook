const initialState = {
  date: date.now(),
  item: "",
  amount: "",
  description: "",
};

//리듀서(함수)
const addPosts = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default addPosts;

import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  console.log(action)
  switch (action.type) {
    case INCREMENT:
    console.log('case inc')
    // Fill in the body of this case
      return count+1
    case DECREMENT:
    // Fill in the body of this case
      return count-1
    default:
      return count;
  }

};

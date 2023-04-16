import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";
const TOGGLE_LIKE = "produce/TOGGLE_LIKE";

// action creator
export const populateProduceAC = () => ({
    type: POPULATE,
    produce: produceData,
});
//action creator
export const toggleLikeAC = (id) => {
   return  {
        type: TOGGLE_LIKE,
        id
    }
};
// selectors
export const getAllProduceSEL = state => Object.values(state.produce);

const produceReducer = (state = {}, action) => {
    let newState = { ...state };
    // console.log('newState in produdceReducer', newState)
    // console.log('action in produceReducer', action)
    switch (action.type) {
        case POPULATE:
            const x = {};
            produceData.forEach((p) => {
                x[p.id] = p;
            });
            return { ...newState, ...x };
        case TOGGLE_LIKE:
            console.log('newState[action.id]', newState[action.id].liked)
            newState[action.id].liked = !newState[action.id].liked
            return newState;


        default:
            return state;
    }
};
export default produceReducer;

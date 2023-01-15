const setPicturesData = (state, action) => {
    return action.payload;
}
const addPicture = (state, action) => {
    state.push(action.payload);
}
export default {
    setPicturesData,
    addPicture
}
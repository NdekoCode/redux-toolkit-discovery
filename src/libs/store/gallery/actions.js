const setPicturesData = (state, action) => {
    return action.payload;
}
const addPicture = (state, action) => {
    state.push(action.payload);
}
const deletePicture = (state, action) => {
    state = state.filter(p => p.id !== action.payload);
    return state;
}
export default {
    setPicturesData,
    addPicture,
    deletePicture
}
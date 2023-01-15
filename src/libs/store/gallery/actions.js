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
const editPicture = (state, action) => {
    console.log(action.payload);
    state.map(p => {
        if (p.id === action.payload.id) {
            p.artist = action.payload.artist;
            p.year = action.payload.year;
            return p;
        }
        return p;
    })
}
export default {
    setPicturesData,
    addPicture,
    deletePicture,
    editPicture
}
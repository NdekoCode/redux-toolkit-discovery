import {
    createSlice
} from "@reduxjs/toolkit";
import actions from './actions';
const initialState = [];
const pictureSlice = createSlice({
    name: "picture",
    initialState,
    reducers: {
        ...actions
    }

})
export const {
    setPicturesData,
    addPicture
} = pictureSlice.actions;
export default pictureSlice;
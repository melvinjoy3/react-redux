import {configureStore} from '@reduxjs/toolkit';
import colorReducer from './Color/colorSlice';
export default configureStore({
    reducer:{
        color:colorReducer
    }
})
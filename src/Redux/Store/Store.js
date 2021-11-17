import {configureStore} from '@reduxjs/toolkit';
import colorReducer from '../color/colorSlice';
export default configureStore({
    reducer:{
        color:colorReducer
    }
})
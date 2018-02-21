import { combineReducers } from 'redux';
import HotelReducer from './HotelReducer';
import SelectHotel from './SelectHotels';
import FormReducer from './FormReducer';


export default combineReducers({
    forminput: FormReducer,
    libraries: HotelReducer,
    selectedHotelId: SelectHotel,
    
});

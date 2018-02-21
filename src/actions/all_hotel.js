
import hotel_data from '../reducers/AllContent.json';
const Hotels = 'allhotels';


export function all_hotel_action(dispatch) {  
	console.log('action called');  
	    return{          
					  type:Hotels,         
					  payload:hotel_data
				};      
		
}

		
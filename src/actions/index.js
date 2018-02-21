import { 
    NAME_CHANGED,
    LNAME_CHANGED,
    EMAIL_CHANGED,
    PHONE_CHANGED,
    ADULTS_CHANGED,
    CHILDREN_CHANGED,
    COMM_CHANGED,
    SELECT_HOTELS,
    WHERE_TOEAT,
    EXOTIC,
    REVIEW
} from './types';

import wheretoeat_data from '../reducers/WhereToEat.json';
import exotic_data from '../reducers/exotic.json';
import review_data from '../reducers/hotel_review.json';

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
};
export const lnameChanged = (text) => {
    return {
        type: LNAME_CHANGED,
        payload: text
    };
};
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
export const phoneChanged = (text) => {
    return {
        type: PHONE_CHANGED,
        payload: text
    };
};
export const adultsChanged = (text) => {
    return {
        type: ADULTS_CHANGED,
        payload: text
    };
};
export const childrenChanged = (text) => {
    return {
        type: CHILDREN_CHANGED,
        payload: text
    };
};
export const commChanged = (text) => {
    return {
        type: COMM_CHANGED,
        payload: text
    };
};
export const selectedHotel = (libraryId) => {
    return {
        type: SELECT_HOTELS,
        payload: libraryId
    
    };
};


export function where_to_eat_action(dispatch) {  
    
        return{          
                      type:WHERE_TOEAT,         
                      payload:wheretoeat_data
                };      
        
}

export function exotic_action(dispatch) {  
    
        return{          
                      type:EXOTIC,         
                      payload:exotic_data
                };      
        
}
export function hotel_review_action(dispatch) {  
    
        return{          
                      type:REVIEW,         
                      payload:review_data
                };      
        
}

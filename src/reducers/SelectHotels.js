import SELECT_HOTELS from '../actions/types';

const INSTALL_STATE = {};
export default (state = INSTALL_STATE, action) => {
    switch (action.type) {
        case SELECT_HOTELS:
            return [...state, action.payload];
        default:
            return state;
    }
};

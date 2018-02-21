import { 
    NAME_CHANGED,
    LNAME_CHANGED,
    EMAIL_CHANGED,
    PHONE_CHANGED,
    ADULTS_CHANGED,
    CHILDREN_CHANGED,
    COMM_CHANGED
} from '../actions/types';

const INSTALL_SALE = { 
    fname: '',
    lname: '',
    email: '',
    phone: '',
    adults: '1',
    children: '1',
    comm: ''
};

export default (state = INSTALL_SALE, action) => {

    switch (action.type) {
        case NAME_CHANGED:
            return { ...state, fname: action.payload };
        case LNAME_CHANGED:
            return { ...state, lname: action.payload };
        case EMAIL_CHANGED:
                return { ...state, email: action.payload };
        case PHONE_CHANGED:
            return { ...state, phone: action.payload };
        case ADULTS_CHANGED:
            return { ...state, adults: action.payload };
        case CHILDREN_CHANGED:
            return { ...state, children: action.payload };
        case COMM_CHANGED:
            return { ...state, comm: action.payload };
        default:
            return state;
    }
};

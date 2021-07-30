import { User } from '../interfaces/user.interface';

const initialUser:User = {
    name: '',
    rol: '',
    password: ''
}

const userReducer = (state:User = initialUser, action:any) => {
    switch(action.type){
        case 'ADD_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'REMOVE_USER':
            return null;
        default:
            return state;
    }
}

export default userReducer;
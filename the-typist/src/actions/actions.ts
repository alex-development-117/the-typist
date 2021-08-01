import { User } from '../interfaces/user.interface';

export const ACTION_ADD_LOGGED_USER = (state:User) => {

    return {
        type: 'ADD_USER',
        payload: state
    }
}

export const ACTION_REMOVE_LOGGED_USER = (state:User) => {

    return {
        type: 'REMOVE_USER',
        payload: state
    }
}
import React, {createContext, useReducer} from 'react';
import users from "../data/users";

const initialState = { users };
const UserContext = createContext({});

const actions = {
    createUser(state, action) {
        const user = action.payload
        user.id = Math.random();
        return {
            ...state,
            users: [...state.users, user]
        }
    },
    updateUser(state, action) {
        const updated = action.payload;
        return {
            ...state,
            users: state.users.map(user => user.id === updated.id ? updated : user)
        }
    },
    deleteUser(state, action) {
        const user = action.payload;
        return {
            ...state,
            users: state.users.filter(u => u.id === user.id)
        }
    }
}

export const UserProvider = props => {
    function reducer(state, action) {
        const fn = actions[action.type];
        return fn ? fn(state, actions) : state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;
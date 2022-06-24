import React, {createContext, useReducer} from 'react';
import vehiculos from "../data/vehiculos";

const initialState = { vehiculos };
const VehiContext = createContext({});

const actions = {
    createVehiculo(state, action) {
        const vehiculo = action.payload
        vehiculo.id = Math.random();
        return {
            ...state,
            vehiculos: [...state.vehiculos, vehiculo]
        }
    },
    updateVehiculo(state, action) {
        const updated = action.payload;
        return {
            ...state,
            vehiculos: state.vehiculos.map(vehiculo => vehiculo.id === updated.id ? updated : vehiculo)
        }
    },
    deleteVehiculo(state, action) {
        const vehiculo = action.payload;
        return {
            ...state,
            vehiculos: state.vehiculos.filter(v => v.id === vehiculo.id)
        }
    }
}

export const vehiculosProvider = props => {
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

export default VehiContext;
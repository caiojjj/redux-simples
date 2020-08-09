const initialState = {
    min: 1,
    max: 20
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'NUM_MIN':
            return {
                ...state,
                min: action.payload
            }
        case 'NUM_MAX':
            return {
                ...state,
                max: action.payload
            }
        default: 
            return state
    }
}
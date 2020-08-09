// Actions creator
export function changeNumberMin(newNumber) {
    return {
        type: 'NUM_MIN',
        payload: newNumber
    }
}


export function changeNumberMax(newNumber){
    return{
        type: 'NUM_MAX',
        payload: newNumber
    }
}
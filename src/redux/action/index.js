export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}

export const clearCard = (product) => {
    return{
        type: "REMOVE",
        payload: product
    }
}
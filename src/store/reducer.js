const initialState = {
     images: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'UPLOAD') {
        return {
            ...state,
            images: [...state.images, action.payload]
        }
    }
    if(action.type === 'REMOVE') {
        return state.images.filter((item) => item !== action.payload)
    }
    return state;
}

export default reducer;
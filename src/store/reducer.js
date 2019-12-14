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
        console.log('aaa ', action.payload)
        let x = state.images.filter((item, index) => index != action.payload )
               return {
                   ...state,
                   images: [...state.images.filter((item, index) => index != action.payload )]
               }
    }
    return state;
}

export default reducer;
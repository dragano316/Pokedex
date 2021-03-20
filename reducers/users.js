const INITIAL_STATE = [];


export const userReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case 'ADD_TO_LIKES':
            const {array} = action.payload;
            return {
                ...state,
                array
            };
        default:{
            return state;
        }
    }
}
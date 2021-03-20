


export class Action {
    static updateUserData(array) {
        return {
            type: 'ADD_TO_LIKES',
            payload: {
                array
            }
        };
    }


}

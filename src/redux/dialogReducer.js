const ADD_MESSAGE_TO_DIALOG = "ADD_MESSAGE_TO_DIALOG";

let initialState = {
    dialogsData: [
        {id: '1', name: 'Andr'},
        {id: '2', name: 'Vova'},
        {id: '3', name: 'Kate'},
        {id: '4', name: 'Maxi'},
        {id: '5', name: 'Kate'},
    ],
    messagesData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'hello'},
        {id: '3', message: 'hello'},
        {id: '4', message: 'how are u?'}
    ]
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE_TO_DIALOG:
            let newMessage = {
                id: 4,
                message: action.message
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        default:
            return state;
    }

}

export const addMessageToDialog = (message) => ( {type: ADD_MESSAGE_TO_DIALOG, message} );


export default dialogReducer;
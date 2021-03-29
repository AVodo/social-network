let store = {

    _state: {

        profilePage: {
            postsData: [
                {id: '1', message: 'Hello', likeCount: '15'},
                {id: '2', message: 'First', likeCount: '11'},
            ],
            newPostText: ''
        },
        dialogPage: {
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
            ],
            newDialogMessage: ''
        },
        siteBar: {
            friendsData: [
                {image: 'https://i.pinimg.com/originals/e8/83/7b/e8837b00067930f307a825c2ff74f3fa.jpg', name: 'Vika'},
                {image: 'https://lover.ru/cache/images/9c4d96175c1835df4854e91008218203/resizeCrop_700_525_center_center__.jpg', name: 'Gosling'},
                {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vMZponqd-ugDQVMyhtNKjlDPNztAvtDt3g&usqp=CAU', name: 'Di Kaprio'}
            ]
        }

    },
    _callSubscriber(){},

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        if (action.type === "ADD-POST"){

            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 90
            }
            this._state.profilePage.newPostText = '';
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(this);

        } else if (action.type === "ADD-POST-TEXT") {

            this._state.profilePage.newPostText = action.postText;
            this._callSubscriber(this);

        } else if (action.type === "ADD-MESSAGE-TO-DIALOG") {

            let newMessage = {
                id: 4,
                message: this._state.dialogPage.newDialogMessage
            }
            this._state.dialogPage.newDialogMessage = '';
            this._state.dialogPage.messagesData.push(newMessage);
            this._callSubscriber(this);

        } else if (action.type === "ADD-MESSAGE-TEXT") {

            this._state.dialogPage.newDialogMessage = action.messageText;
            this._callSubscriber(this);

        }

    }
}

export default store;
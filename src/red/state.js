import {renderNewTree} from "../render";

let state = {

    profilePage: {
        postsData: [
            {id: '1', message: 'Hello', likeCount: '15'},
            {id: '2', message: 'First', likeCount: '11'},
        ]
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
        ]
    },
    siteBar: {
        friendsData: [
            {image: 'https://i.pinimg.com/originals/e8/83/7b/e8837b00067930f307a825c2ff74f3fa.jpg', name: 'Vika'},
            {image: 'https://lover.ru/cache/images/9c4d96175c1835df4854e91008218203/resizeCrop_700_525_center_center__.jpg', name: 'Gosling'},
            {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_vMZponqd-ugDQVMyhtNKjlDPNztAvtDt3g&usqp=CAU', name: 'Di Kaprio'}
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 90
    }
    state.profilePage.postsData.push(newPost);
    renderNewTree(state);
}

export default state;
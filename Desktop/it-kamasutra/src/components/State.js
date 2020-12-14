const ADD_POST = "ADD-POST"
const ADD_SMS = "ADD-SMS"

let store = {
    _appState: {
        profilePage: {
            postStatistics: [
                {
                    id: 1,
                    message: "Hi, how are you?",
                    likesCount: 231,
                    repostCount: 51,
                    img: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                },
                {
                    id: 2,
                    message: "Hi, how are you? Wow what about you?",
                    likesCount: 321,
                    repostCount: 101,
                    img: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                },
                {
                    id: 3,
                    message: "Hi, how are you? Im fine, thanks",
                    likesCount: 751,
                    repostCount: 24,
                    img: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
                }
            ]
        },
        dialogsPage:{
            dialogs: [
                {
                    id: 1,
                    name: "Igor Kim",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                },
                {
                    id: 2,
                    name: "Gubanov Ivan",
                    photo: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                },
                {
                    id: 3,
                    name: "Kirill Kim",
                    photo: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
                },
                {
                    id: 4,
                    name: "Gubanov Ivan",
                    photo: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"
                },
                {
                    id: 3,
                    name: "Kirill Kim",
                    photo: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
                },
                {
                    id: 5,
                    name: "Gubanov Ivan",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                },
                {
                    id: 3,
                    name: "Kirill Kim",
                    photo: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
                },
                {
                    id: 6,
                    name: "Gubanov Ivan",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                },
                {
                    id: 3,
                    name: "Kirill Kim",
                    photo: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png"
                },
                {
                    id: 7,
                    name: "Gubanov Ivan",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                }
            ],
            sms: [
                {
                    name: "Igor Kim",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
                    id: 1,
                    message: "Hi, my name is Igor, What is your name?"
                },
                {
                    name: "Kirill Kim",
                    photo: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
                    id: 2,
                    message: "Wow, you are so fun, nice idea, yes of course"
                },
                {
                    name: "Igor Kim",
                    photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
                    id: 1,
                    message: "Are ypo down?"
                },
                {
                    name: "Kirill Kim",
                    photo: "https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png",
                    id: 2,
                    message: "Yes, I am"
                },
            ]
        }
    },

    getState() {
        return this._appState
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    _callSubscriber() {
        console.log("state")
    },

    _addSMS(SMS) {
        let newSMS = {
            name: "Igor Kim",
            id: 6,
            message: SMS,
            photo: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        }
        this._appState.dialogsPage.sms.push(newSMS)
        this._callSubscriber(this._appState)
    },

    _addPost(postMessage) {
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0,
            repostCount: 0,
            img: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        }
        this._appState.profilePage.postStatistics.push(newPost)
        this._callSubscriber(this._appState)
    }, 

    dispatch(action) {  //action - object, dispatch - отправка, example: {type: "ADD-POST"}
        if (action.type === ADD_POST){
            this._addPost(action.postMessage)
        }
        if (action.type === ADD_SMS){
            this._addSMS(action.SMS)
        }
    }
}

//утилита, вспомогательная функция, то же самое что и с ретурном
debugger
export const addPostActionCreator = (texts) => ({type: ADD_POST, postMessage: texts})

export default store
// window.store = store

















    // sidebar: {
    //     friends: {
    //         img1: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
    //         img2: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
    //         img3: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",
    //         name1: "3",
    //         name2:"1",
    //         name3:"2"
    //     }
    // }

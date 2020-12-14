import s from "./MyPosts.module.css"
import React from "react"
import addPostActionCreator from "../../../State"

const MyPosts = (props) => {
  let newPostElement = React.createRef()

  let addPost = () => {
    debugger
    let text = newPostElement.current.value
    // console.log(addPostActionCreator(text))
    props.dispatch(addPostActionCreator(text))
    newPostElement.current.value = ""
  }

  return(
    <div className={s.posts}>
      <div className={s.posts__title}>My posts</div>
      <textarea ref={newPostElement} type="text" placeholder="your news..."></textarea>
      <button className={s.btn} onClick={addPost}>Send</button>
    </div>
    
  )
}

export default MyPosts;

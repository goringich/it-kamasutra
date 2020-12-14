import React from "react"
import s from "./Profile.module.css"
import Person from "./Posts/Person/Person"
import MyPosts from "./Posts/MyPosts/MyPosts"
import Posts from "./Posts/Posts"

const Profile = (props) => {
  return( 
    <div>
      <img className={s.content__photo} src="https://image.freepik.com/free-photo/a-wide-panorama-of-the-beautiful-natural-landscape-with-a-swamp-coniferous-forest-and-sky-green-forest-blue-sky-and-white-fluffy-clouds-at-the-sunny-summer-day_158388-3897.jpg" alt=""/>
      <Person name="Igor.K" site="https://loh228337/index.html" birthday="28 September" city="Nizhny Novgorod" Education='school 187' avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"/>
      <MyPosts dispatch={props.dispatch}/>
      <Posts postStatistics={props.appState.postStatistics}/>
    </div>
  )
}

export default Profile;

import s from "./Posts.module.css"
import Post from "./Post/Post"

const Posts = (props) => {
    let arrayPosts = props.postStatistics.map( p => <Post message={p.message} likesCount={p.likesCount} repostCount={p.repostCount} img={p.img} />)

    return(
        <div className={s.post}>
            {arrayPosts}
        </div>
    )
}

export default Posts

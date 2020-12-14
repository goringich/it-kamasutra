import s from "./friendsNavbar.module.css"

const friends = (props) => {
    return(
        <div className ={s.item}>
            <div className={s.text}>Friends</div>
            <div className={s.peoples}>
                <div className={s.inner__item}>
                    <img src={props.img1} alt=""/>
                    <div className={s.name}>{props.name1}</div>
                </div>
                <div className={s.inner__item}>
                    <img src={props.img2} alt=""/>
                    <div className={s.name}>{props.name2}</div>
                </div>
                <div className={s.inner__item}>
                    <img src={props.img3} alt=""/>
                    <div className={s.name}>{props.name3}</div>
                </div>
            </div>
        </div>
    )
}

export default friends

import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
// import friends from "./friendsNavbar/friendsNavbar"

const Navbar = (props) => {
  // let friendsNav = props.friends.map( f => <friends text={f.text} img={f.img} />)

  return(
    <nav className={s.nav}>
      <div className={s.item} >
        <NavLink to="/profile" activeClassName={s.active__link}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active__link}>Message</NavLink>
      </div>
      <div className={s.item}> 
        <NavLink to="/news" activeClassName={s.active__link}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active__link}>Music</NavLink>
      </div>
      <div className={s.item} id={s.last}>
        <NavLink to="/settings" activeClassName={s.active__link}>Settings</NavLink>
      </div>
      {/* <div className={s.item}>
        {friendsNav}
      </div> */}
    </nav>
  )

}

export default Navbar

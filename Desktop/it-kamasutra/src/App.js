import './App.css'
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import Profile from "./components/profile/Profile"
import Dialogs from "./components/dialogs/Dialogs"
import News from "./components/news/News"
import Music from "./components/music/Music"
import {BrowserRouter, Route} from "react-router-dom"

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <main>
          <Navbar/> {/*appState={props.appState.sidebar} */}
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Profile appState={props.appState.profilePage} dispatch={props.dispatch}/> }/> 
            <Route path="/dialogs" render={() => <Dialogs appState={props.appState.dialogsPage} dispatch={props.dispatch} /> }/>
            <Route path="/news" render={() => <News />}/>
            <Route path="/music" render={() => <Music />}/>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

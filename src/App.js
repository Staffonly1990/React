/*import logo from './logo.svg';*/

import './App.css';
import { Sidebar } from './components/sidebar/sidebar'
import { Header } from './components/header/header'
import { Main_list } from './components/list_main/main_list'
import { Messag_list } from './components/list_messag/messag_list'
import { Music } from './components/list_music/music'
import { News } from './components/list_news/news'
import { Friends } from './components/list_friends/friends'
import { Settings } from './components/list_settings/settings'

import { BrowserRouter, Route } from 'react-router-dom';







function App(props) {
  return (
    <BrowserRouter>
      <div className="Main">

        <Header />
        <Sidebar />

        <div className='content' >
          <Route path='/main' render={()=><Main_list dispatch={props.dispatch}/>}/>
          <Route path='/messages' render={()=><Messag_list dispatch={props.dispatch}/>}/>
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/settings' component={Settings} />
          <Route path='/friends' render={()=><Friends dispatch={props.dispatch} />} />

        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;

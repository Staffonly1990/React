import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/sidebar'
import { Header } from './components/header'
import { Main_list } from './components/lists/main_list'


function App() {
  return (
    <div className="Main">

      <Header />
      <Sidebar />
      <Main_list />

    </div>
  );
}

export default App;

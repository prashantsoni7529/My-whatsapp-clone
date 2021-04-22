import './App.css';
import Sidebar from './Components/Sidebar'
import ChatSection from './Components/Chatsection'

function App() {
  return (
    <div className="App">
      <div className="Appbody">
        <Sidebar/>
        <ChatSection/>
      </div>
     
    </div>
  );
}

export default App;

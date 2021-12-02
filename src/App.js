import './App.css';
import {Profile} from './profile/Profile';

function App() {

    return (
    <div className="App">
      <Profile 
      fullName= "ghofrane"
      Bio= "this is my bio"
      Profission="student">
        <img src= " https://www.w3schools.com/howto/img_avatar2.png " alt="profile pic"></img>
      </Profile>

    </div>
  );
}

export default App;
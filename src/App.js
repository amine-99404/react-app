import logo from './logo.svg';
import './App.css';
import animal from './animals.jpg'
import './style.css'
function App() {
  return (
    <div>
      <div style={{border:"solid 1px,black",maxWidth:"100px"}}>
      <h1 className='title red'>Your Name Here</h1>
      
       <img src="/image/road.jpg" alt="road" />
        <img src={animal} alt="amine"></img>
      </div>
      <video controls>
       <source src="myVideo.mp4" type="video/mp4" />
      </video>
    
    </div>
    
      
      
  );
}

export default App;

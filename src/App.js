import logo from './logo.svg';
import './App.css';
import Post from './Post';

const styles ={
  color:'green'
}
const App = ()=>{
  return(
<div>
  <h2 style={
  styles
  }>
    Sudeera test


    Just a test
  </h2>
  <Post/>
</div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import App from '../src/App';


function save() {
  return (
  <nav class="btn-warning navbar navbar-light bg-light">
    <div className="container-fluid">
      <form className="d-flex">
        <input className="btn-dark rounded-pill form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button type="button" class="rounded-pill btn btn-primary btn-sm">search</button>
        <p><a href="App.js">home</a></p>
        <p>about</p>
        
      </form>
    </div>
  </nav>


  );
}

export default save;


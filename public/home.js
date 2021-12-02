import logo from './logo.svg';
import './App.css';
import save from './pages/save';


function home() {
  return (
  <nav class="btn-warning navbar navbar-light bg-light">
    <div className="container-fluid">
      <form className="d-flex">
        <input className="btn-dark rounded-pill form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button type="button" class="rounded-pill btn btn-primary btn-sm">search</button>
        <p>home</p>
        <p><a href="save.js">about</a></p>
      </form>
    </div>
  </nav>


    
  );
}

export default home;

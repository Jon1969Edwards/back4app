import './App.css';

// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';
import { ProductCreation } from './ProductCreation';
import { UserRegistration } from './UserRegistration';
import { UserLogin } from './UserLogin';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'mXd7yroqN2ilTTi3atVQYKY8Pe5OvNiXFMmjDyxu';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'VirGBEzNGNSj6EBuV8uvJP1bD7AzrZNFF7z7jjMl';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserRegistration />
        <UserLogin />
        <ProductCreation />
      </header>
    </div>
  );
}

export default App;
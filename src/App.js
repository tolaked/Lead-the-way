
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import SurveyTable from './components/survey/SurveyTable';
import Signup from './components/SignUp';
import Competency from './components/dashboard/Competency';




function App() { 
  
return (
  <BrowserRouter >
      <Route path="/" exact component={Signup} />
      <Route path="/dashboard" exact component={Competency} />
  {/* <Route path="/" exact component={SurveyForm} /> */}
  {/* <Route path="/result" exact component={SurveyTable} /> */}
  {/* <Route path="/dashboard" exact component={Dashboard} /> */}
  </BrowserRouter>
);

}

export default App;

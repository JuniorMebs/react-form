
import './App.css';
import { button, form, FormGroup, Label, Input} from 'reactstrap';

import{ FacebookLoginButton} from 'react-social-login-buttons'

function App() {
  return (

    <div class="container">
    <form className="login-form">
        <h1>
    <span className="front- weight-bold">MonPremierSiteWeb.com</span>
  </h1>
    <h2 className="text-center">Bienvenue</h2>
    <FormGroup>
      <Label>Email</Label>
      <input type="email" placeholder="Email"/>
    </FormGroup>

    <FormGroup>
      <Label>Password</Label>
      <input type="password" placeholder="Password"/>
    </FormGroup>

<button className="btn-lg btn-dark btn-block">
Log in
</button>
<div className="text-center pt-3">
    or continue with your social account
</div>
<FacebookLoginButton className="mt-3 mb-3"/>
<div className="text-center">
  <a href="/sign-up">Sign up</a>
  <span className="p-2"></span>
  <a href="/sign-up">Forgot Password</a>
</div>
    </form>
    </div>
  );
}

export default App;

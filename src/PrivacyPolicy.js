import React,{useContext} from 'react';
import RefBar from './RefBar';
import PolicyPage from './PolicyPage';
import References from './References';
import RegisterLogin from './RegisterLogin';
import { AppContext } from './App';

const PrivacyPolicy = () => {

  const [state, setState] = useContext(AppContext)

    return (
      <div className="privacy">
          <RefBar image="img/gameCode.gif"/>
          <PolicyPage img="img/chip.jpg"/>
          <References image="img/References.jpg"/>
          {state.signUpForm && <RegisterLogin />}
      </div>
    )
  }

export default PrivacyPolicy;
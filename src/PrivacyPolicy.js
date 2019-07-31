import React from 'react';
import NBprivacy from './NBprivacy';
import PolicyPage from './PolicyPage';
import References from './References';
import NavBar2 from './NavBar2';

const PrivacyPolicy = () => {

    return (
      <div className="privacy">
          <NBprivacy image="img/gameCode.gif"/>
          <PolicyPage img="img/chip.jpg"/>
          <References image="img/References.jpg"/>
      </div>
    )
  }

export default PrivacyPolicy;
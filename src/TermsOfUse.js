import React from 'react';
import RefBar from './RefBar';
import TermsPage from './TermsPage';
import References from './References';

const PrivacyPolicy = () => {

    return (
      <div className="privacy">
          <RefBar image="img/gameCode.gif"/>
          <TermsPage img="img/chip.jpg"/>
          <References image="img/References.jpg"/>
      </div>
    )
  }

export default PrivacyPolicy;
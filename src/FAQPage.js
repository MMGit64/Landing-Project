import React from 'react';

const FAQPage = (prop) => {

    return (
      <div className="faqpage" style={{backgroundImage: `url('${prop.img}')`}}>
        <div className="container ">
            <div className="page">
                <h2>Frequently Asked Questions</h2>

                <h6>What is Free World Gaming?</h6>
                <p>Free World Gaming is an online global competetive gaming platform where users can pick from a wide variety of genre of games and play either at their own leisure or competitively against other online users.</p>
                
                <h6>Can I pick more than one game?</h6>
                <p>Yes. You can play upto as many games as available with no time limits.</p>
                
                <h6>Is Free world Games free?</h6>
                <p>Yes. Registration for an account and aswell as playing the games are all free</p>
                
                <h6>Are there any other charges?</h6>
                <p>There are various online gaming special features that would come at a charge.</p>
                
                <h6>Are there any games restricted based on age?</h6>
                <p>There are games certified for specific ages and above.
                    <ul>
                        <li>U: Suitable for everyone</li>
                        <li>PG-13: Parental guidance for ages under 13</li>
                        <li>16: Unsuitable for ages under 16</li>
                        <li>18: Suitable only for Adults</li>
                    </ul>
                </p>

                <h6>How do you monitor what game is suitable for users?</h6>
                <p>Verification for date of birth will be required prior to playing a game(excluding U-rated games) in the form of ID that must be scanned and emailed to fwp19@info.com</p>
                
                <h6>What makes Free World Gaming different from other online gaming platforms?</h6>
                <p>
                    <ol>
                        <li>You can compete against anyone from around the globe and take on the most experienced gamers</li>
                        <li>Free World Gaming takes into account of the popularity of the games based that of the users. <br/>The more popular the games, the more options made available of the same genre.</li>
                        <li>As your popularity increases, you are more likely to gain followers and increase your profile across social media networks.<br/> A prominent profile could prompt special invitations to various game events i.e. E3</li>
                    </ol>
                </p>
                
                <h6>What if I am not interested in gaining followers or spreading my profile across social media.</h6>
                <p> You may choose whether to publicly display your game records on your account, selecting either public or private on your account settings.<br/> Choosing private will keep all your records hidden from the rest of the community.</p>
                
                <h6></h6>
                <p></p>
            </div>
        </div>
      </div>
    )
  }

export default FAQPage;
import React from 'react';

const PolicyPage = (prop) => {

    return (
      <div className="policypage" style={{backgroundImage: `url('${prop.img}')`}}>
        <div className="container ">
            <div className="page">
                <h2>Privacy Policy</h2>

                <h6>What personal information do we collect from the people that visit our blog, website or app?</h6>
                <p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, company name, email address, mailing address, credit card information, payment and billing information, country location etc. to enable us to offer and fulfill the services you request and help you with your experience.</p>
                
                <h6>When do we collect information?</h6>
                <p>We collect information from you when you place an order, subscribe to a newsletter or enter information on our site.</p>
                
                <h6>How do we use your information?</h6>
                <p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>
                <ul>
                    <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
                    <li>To improve our website in order to better serve you.</li>
                    <li>To allow us to better service you in responding to your customer service requests.</li>
                    <li>To quickly process your transactions.</li>
                    <li>To follow up with them after correspondence (live chat, email or phone inquiries)</li>
                </ul>
                
                <h6>How do we protect your information?</h6>
                <p>Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.
                Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
                We implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information.
                All transactions are processed through a gateway provider and are not stored or processed on our servers.</p>

                <h6>Do we use ‘cookies’?</h6>
                <p>Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                We use cookies to:</p>
                <ul>
                    <li>Help remember and process the items in the shopping cart.</li>
                    <li>Understand and save user’s preferences for future visits.</li>
                    <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
                </ul>
               <p> You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is a little different, look at your browser’s Help Menu to learn the correct way to modify your cookies.
                If you turn cookies off, Some of the features that make your site experience more efficient may not function properly. It won’t affect the user’s experience that makes your site experience more efficient and may not function properly.</p>
 
                <h6>What if there are any changes to our privacy policy?</h6>
                <p>You will be notified of any Privacy Policy changes:</p>
                    <ul>
                        <li>On our Privacy Policy Page</li>
                    </ul>
                
                
                <h6>Updates to your personal information?</h6>
                <p>Can change your personal information:</p>
                    <ul>
                        <li>By logging in to your accounte</li>
                    </ul>
                

                <h6>We collect your email address in order to:</h6>
                <ul>
                    <li>Help remember and process the items in the shopping cart.</li>
                    <li>Understand and save user’s preferences for future visits.</li>
                    <li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>
                </ul>
                
                <h6>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since each browser is a little different, look at your browser’s Help Menu to learn the correct way to modify your cookies.
                If you turn cookies off, Some of the features that make your site experience more efficient may not function properly. It won’t affect the user’s experience that makes your site experience more efficient and may not function properly.</h6>
                
                <h6>Additionally we provide the following:</h6>
                <ul>
                    <li>Send information, respond to inquiries, and/or other requests or questions</li>
                    <li>Process orders and to send information and updates pertaining to orders.</li>
                    <li>Send you additional information related to your product and/or service.</li>
                </ul>

                <h6>If at any time you would like to unsubscribe from receiving future emails, you can email us at: fwp2019@info.com and we will promptly remove you from ALL correspondence.</h6>
            </div>
        </div>
      </div>
    )
  }

export default PolicyPage;
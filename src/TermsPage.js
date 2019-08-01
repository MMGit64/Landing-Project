import React from 'react';

const TermsPage = (prop) => {

    return (
      <div className="termspage" style={{backgroundImage: `url('${prop.img}')`}}>
        <div className="container ">
            <div className="page">
                <h2>Terms of Use</h2>
                <p className="subtitle">Below are our Terms of Service, but if you have an issue, always feel free to email us at fwg2019@info.com and we’ll do our best to resolve it in a fair and timely fashion.</p>
            
                <h6>Application of Terms</h6>
                <p>By visiting and/or taking any action on Free World Games, you confirm that you are in agreement with and bound by the terms outlined below. These terms apply to the website, emails, or any other communication.</p>
                           
                <h6>Themes</h6>
                <p>All products are 100% digital and delivered electronically to your email.
                <br/>Free World Games are not responsible for you not receiving your theme if you fail to provide a valid email or for technical issues outside our control.</p>
                           
                <h6>Security &amp; Payments</h6>
                <p>All payments are processed securely through PayPal or Stripe. Free World Games does not directly process payments through the website.</p>
                           
                <h6>Refunds</h6>
                <p>You have 14 days to evaluate your purchase. If your purchase fails to meet expectations set by the seller, or is critically flawed in some way, contact Free World Games and we will issue a full refund pending a review.
                <br/>The issue of refunds is at the complete discretion of Free World Games.</p>
                           
                <h6>Membership &amp; Content</h6>
                <p>Membership is a benefit for those who follow our terms and policies. We may at any time suspend or terminate your account.
                <br/><br/>We can view and/or remove any content for any reason at our own discretion. This will typically only be exercised for issues needing immediate resolution, such as, but not limited to, the posting of unauthorized content, offensive content, illegal content, or anything breaching anyone else’s rights.</p>
                           
                <h6>Liability</h6>
                <p>You indemnify us against all losses, costs (including legal costs), expenses, demands or liability that we incur arising out of, or in connection with, any claims against us relating to your use of Free World Games.</p>
                           
                <h6>Requesting, Modifying or Deleting Your Data (GDPR)</h6>
                <p>We are a small operation, but we work hard to make sure your data remains safe and we only collect what is needed to provide our services. If you want to request an export of your data, a modification to any data we have related to your account, or delete of all data permanently, please email fwp2019@info.com and we’ll complete your request in a timely manner.</p>
                           
                <h6>Changes to terms</h6>
                <p>If we change our terms of use we will post those changes on this page.</p>

            </div>
        </div>
      </div>
    )
  }

export default TermsPage;
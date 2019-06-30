import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/Home.page';
import PastTrials from '../pages/past-trials/PastTrials';
import HowItWorks from '../pages/how-it-works/HowItWorks';
import ContactUs from '../pages/contact-us/ContactUs';
import Login from '../pages/log-in/Login';
import PrivacyPolicy from '../pages/privacy-policy/PrivacyPolicy';
import SubmitName from '../pages/submit-name/SubmitName';
import TermsAndConditions from '../pages/terms-and-conditions/TermsAndConditions';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/past-trials" component={PastTrials} exact />
      <Route path="/how-it-works" component={HowItWorks} exact />
      <Route path="/contact-us" component={ContactUs} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/privacy-policy" component={PrivacyPolicy} exact />
      <Route path="/submit-name" component={SubmitName} exact />
      <Route
        path="/terms-and-conditions"
        component={TermsAndConditions}
        exact
      />
    </Switch>
  </BrowserRouter>
);

export default Router;

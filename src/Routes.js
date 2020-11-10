import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Home from './components/home/';
import Privancy from './components/services/';
import PoliticTra from './components/politic'
import Terms from './components/terms'
import Contact from './components/contactUs';
import NotFound from './components/404';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Privacy" component={Privancy} />
        <Route path="/PoliticTratament" component={PoliticTra} />
        <Route path="/termsAndCondition" component={Terms}/>
        <Route path="/ContactUs" component={Contact}/>
        <Route component={NotFound} />
    </Switch>
);

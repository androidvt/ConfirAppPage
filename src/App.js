import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import Navbar from './components/navbar/';
import Layout from './components/Layout';
import Routes from './Routes';
import { HeaderWrapper } from "./styles/Header"

import { Route, Switch }  from 'react-router-dom';
import Home from './components/home/';
import Privancy from './components/services/';
import PoliticTra from './components/politic'
import Terms from './components/terms'
import Contact from './components/contactUs';
import NotFound from './components/404';


import MenuButtom from './components/MenuButtom'
function App() {
  const [open, setOpen] = React.useState(false)

  const handleClick = () =>{
    setOpen(!open)
  }
  return (
    <BrowserRouter>
            <Layout>       
        <Switch> 
          <HeaderWrapper>
          <Navbar open={open} />          
           <MenuButtom open={open} handleClick={handleClick} />          
            <Route exact path="/" component={Home} />
            <Route path="/Privacy" component={Privancy} />
            <Route path="/PoliticTratament" component={PoliticTra} />
            <Route path="/termsAndCondition" component={Terms}/>
            <Route path="/ContactUs" component={Contact}/>
          </HeaderWrapper>
        </Switch>        
           </Layout>

    </BrowserRouter>
  );
}

export default App;

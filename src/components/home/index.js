import React from 'react';
import Jumbotron from './jumbotron';
import './index.css';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';


export default () => {
    return (
        <div  style={{maxWidth:'100%', textAlign:'center', paddingBottom:'20em', position:'relative', top:'4em', zIndex:'-2'}}>
        <div className="jumbo border rounded" style={{maxWidth:"100%"}}>
 
        </div>
        <div  style={{maxWidth:'100%', textAlign:'center', paddingBottom:'1em', alignItems:'center'}} >
                <div style={{display:'block', alignItems:'center', justifyContent:'center', textAlign:'center' }} >
                    <div style={{fontSize:'2em', paddingTop:'0.5em'}} >La App para todos tus eventos</div>
                    <div >
                        <div  style={{maxWidth:'100%', textAlign:'center', alignItems:'center', justifyContent:'center', display:'block'}}>
                        Con<b> ConfirmApp </b> podrás gestionar todos tus <br /> eventos de manera fácil e intuitiva
                        </div>
                    </div>
                </div>
            </div>
                      <h4 style={{paddingTop:'1em'}}> Puede descargarla en su plataforma preferida:</h4>
            <div style={{paddingTop:'2em', display:'flex', alignItems:'center', textAlign:'center', justifyContent:'center'}}>
            <div><a style={{paddingRight:'2em'}} href="http://play.google.com/store/apps/details?id=com.confirmapp"><Button color="primary" variant="contained"> ConfirmApp PlayStore</Button></a></div>
           <div> <a href="itms-apps://itunes.apple.com/app/apple-store/id1497388031"><Button color="primary" variant="contained"> ConfirmApp IOS</Button ></a></div>

            </div>

        </div>
    )
}
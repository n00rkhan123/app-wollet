import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Unwrap.css'
import EtmWrap from '../../assets/ethWrap.png'

import {Link } from 'react-router-dom'
const Wrap = () => {
  return <div>
      <div className='wrapBackGroud'>
      <div className='container'>
        <div className='cal-md-12'>
      <div className='cal-md-6 wrapBtnSwapDiv'>
      <Link to='/wrap'>
     <button className='btn wrapBtnSwap1'>
       Wrap
     </button>
     </Link>
     <button className='btn wrapBtnSwap2'>
    Unwrap
     </button>
      </div>
      <div className='col-md-6'>
        <div className='row'>
          <div className='col-md-12 wrapOuter'>
            <div className='wrapHeadingDiv'>
              <p className='wrapHeading'>
                Unwrap
              </p>
            </div>
            <div className='col-md-12 wrapIner'>
             <div className='col-md-6'>
               <p className='wrapPara1'>0.00</p>
             </div>
             <div className='col-md-6 wrapMd'>
             <div className='wrapImgePra'>
               <img src={EtmWrap} />
              <span className='wrapSpan1'> FTMA</span>
             </div>
             <div>
               <p className='wrapPara3'> <span className='wrapSpan2'>Bal: </span>0.00FTMA <span className='wrapSpan3'> MAX</span>  </p>
             </div>
             </div>
             
            </div>

            <div className='wrapBtnDvi'>
              <button className='btn btn-success wrapBtn'>
                Wrap
              </button>
            </div>
          </div>
        </div>
        </div>
        </div>
        
        
      </div>
    </div>
  </div>;
};

export default Wrap;

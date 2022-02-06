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
      <div className='cal-md-6 unwrapBtnSwapDiv'>
      <Link to='/wrap'>
     <button className='btn unwrapBtnSwap1'>
       Wrap
     </button>
     </Link>
     <Link to=''>
     <button className='btn unwrapBtnSwap2'>
    Unwrap
     </button>
     </Link>
      </div>
      <div className='col-md-6'>
        <div className='row'>
          <div className='col-md-12 unwrapOuter'>
            <div className='unwrapHeadingDiv'>
              <p className='unwrapHeading'>
                Unwrap
              </p>
            </div>
            <div className='col-md-12 unwrapIner'>
             <div className='col-md-6'>
               <p className='unwrapPara1'>0.00</p>
             </div>
             <div className='col-md-6 unwrapMd'>
             <div className='wrapImgePra'>
               <img src={EtmWrap} />
              <span className='unwrapSpan1'> FTMA</span>
             </div>
             <div>
               <p className='unwrapPara3'> <span className='unwrapSpan2'>Bal: </span>0.00FTMA <span className='unwrapSpan3'> MAX</span>  </p>
             </div>
             </div>
             
            </div>

            <div className='unwrapBtnDvi'>
              <button className='btn btn-success unwrapBtn'>
                Unwrap
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

import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Stake.css'
import EtmWrap from '../../assets/ethWrap.png'
const Stake = () => {
  return <div>
    <div className='stackBackGroud'>
      <div className='container'>
        <div className='cal-md-12'>
      <div className='cal-md-6 stackBtnSwapDiv'>
     <button className='btn stackBtnSwap1'>
       Stake
     </button>
     <button className='btn stackBtnSwap2'>
    Unstake
     </button>
      </div>
      <div className='col-md-6'>
        <div className='row'>
          <div className='col-md-12 stackOuter'>
            <div className='stackHeadingDiv'>
              <p className='stackHeading'>
                Stake
              </p>
            </div>
            <div className='col-md-12 stackIner'>
             <div className='col-md-6'>
               <p className='stackPara1'>0.00</p>
             </div>
             <div className='col-md-6 wrapMd'>
             
             <div>
               <p className='stackPara3'> <span className='stackSpan2'>Bal: </span>0.00FTMA <span className='stackSpan3'> MAX</span>  </p>
             </div>
             </div>
             
            </div>

            <div className='wrapBtnDvi'>
              <div className='stackCompounding'>
                <div>
                  <p>Your Stack (Compounding):</p>
                </div>
                <div>
                  <p>0.00</p>
                </div>
              </div>
              <button className='btn btn-success wrapBtn'>
                Stake
              </button>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className='stackTwobutton'>
        <button className='btn stackBtnSwap3'>
       Harvest Reward
     </button>
     <div className='stackBtnSwap4div'>
     <button className='btn stackBtnSwap4'>
    Compound
     </button>
     </div>
    

        </div>
        
        
      </div>
    </div>
  </div>;
};

export default Stake;

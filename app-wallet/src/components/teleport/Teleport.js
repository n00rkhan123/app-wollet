import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Teleport.css';
import EtmWrap from '../../assets/ethWrap.png'
import ETH1 from '../../assets/ethYellow.png'
import eth2 from '../../assets/ethWrap.png'

import ETH from '../../assets/ETH.png'
const Teleport = () => {
  return <div>
    <div className='teleportBackGroud'>
      <div className='container'>
        <div className='cal-md-12'>
      <div className='cal-md-6 teleportBtnSwapDiv'>
     <button className='btn teleportBtnSwap1'>
       Teleport
     </button>
     <button className='btn teleportBtnSwap2'>
    Energize
     </button>
      </div>
      <div className='col-md-6'>
        <div className='row'>
          <div className='col-md-12 teleportOuter'>
            <div className='teleportHeadingDiv'>
              <p className='teleportHeading'>
                From
              </p>
            </div>
            <div className='col-md-12 teleportIner'>
             {/* <div className='col-md-6'>
               <p className='teleportPara1'>0.00</p>
             </div> */}
             <div className='col-md-6 '>
             <div className='teleportImgePra'>
               <img src={ETH} />
              <span className='teleportSpan1'>Ethereum Mainnet</span>
             </div>
             </div>
             <div className='col-md-2 teleportpMd'>
             <div>
             <img src={ETH} />
             </div>
             </div>
             <div className='col-md-4 teleportpMd'>
             <div>
               <p className='teleportPara3'> <span className='teleportSpan2'>Bal: </span>0.00FTMA  </p>
             </div>
             </div>
             
            </div>
            
            <div className='col-md-12 teleportIner'>
             {/* <div className='col-md-6'>
               <p className='teleportPara1'>0.00</p>
             </div> */}
             <div className='col-md-5 '>
             <div className='teleportImgePra'>
               <img src={eth2} />
              <span className='teleportSpan1'>FTMA</span>
              <img className='teleportEth2' src={eth2} />
             </div>
             </div>
             <div className='col-md-7 teleportNewDiv '>
             <div>
               <p className='teleportNewNumber'>0.00</p>
             </div>
             <div>
             <p className='teleportNewNmae'>MAX</p>
             </div>

             </div>
             
            </div>
            <div className='col-md-12 teleportDropDown'>
              <img src={ETH}/>
            </div>
            <div className='col-md-12 teleportIner'>
             {/* <div className='col-md-6'>
               <p className='teleportPara1'>0.00</p>
             </div> */}
             <div className='col-md-6 '>
             <div className='teleportImgePra'>
               <img src={ETH1} />
              <span className='teleportSpan1'>Ethereum Mainnet</span>
             </div>
             </div>
             <div className='col-md-2 teleportpMd'>
             <div>
             <img src={ETH} />
             </div>
             </div>
             <div className='col-md-4 teleportpMd'>
             <div>
               <p className='teleportPara3'> <span className='teleportSpan2'>Bal: </span>0.00FTMA  </p>
             </div>
             </div>
             
            </div>

            <div className='teleportBtnDvi'>
              <button className='btn btn-success teleportBtn'>
                Teleport
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

export default Teleport;

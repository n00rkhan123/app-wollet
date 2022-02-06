import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './mining.css'
import imge1 from '../../assets/image4.png'
import imge2 from '../../assets/ETHtokeMing.png'
import imge3 from '../../assets/ETHDollarMinin.png'

const Mining = () => {
  return <div>
<div className='miningBackground'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-12 minngIner'>
        <div>
          <p className='miningPara1'>LP Mining</p>
          <p className='miningPara2'>Stoke LP token | Earn FTMA</p>

        </div>
        <div className='col-md-10 miningTvlDiv'>
        <div>
          <p className='miningTvl'>
            Mine
          </p>
        </div>
        <div>
          <p className='miningTvl1'>
            TVL
          </p>
        </div>
        <div>
          <p className='miningTvl'>
            APR
          </p>
        </div>
        </div>
        <div className='col-md-10 miningRow1'>
          <div className='miningimgediv'>
          <img className='miningImg' src={imge1}/>
            <img className='miningImg' src={imge2}/>
          </div>
          <div className='miningFMTAdiv1'>
          <p className='miningFMTApara1'>FMTA/ETH</p>
          </div>
          <div className='pt-2'>
            <p className='miningPara4'>
              $4998
            </p>
          </div>
          <div className='pt-2'>
            <p className='miningPara3'>
              50.45%
            </p>
            <p className='miningPara5'>annulize</p>
          </div>

        </div>
        <div className='col-md-10 miningRow2'>
        <div className='miningImgeDiv'>
            <img className='miningImg pr-5' src={imge1}/>
            <img className='miningImg' src={imge3}/>
            
          </div>
          <div className='miningFMTAdiv'>
          <p className='miningFMTApara'>FMTA/ETH</p>
          </div>
          <div>
            <p className='miningPara4'>
              $4998
            </p>
          </div>
          <div>
            <p className='miningPara3'>
              50.45%
            </p>
            <p className='miningPara5'>annulize</p>
          </div>

        </div>

      </div>
    </div>
  </div>
</div>
  </div>;
};

export default Mining;

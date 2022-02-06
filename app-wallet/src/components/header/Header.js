import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import imge1 from '../../assets/image4.png'
import imge2 from '../../assets/Vector.png'
import imge3 from '../../assets/ETH.png'
const Header = () => {
  return <div>
    <div className='background'>
    <div className='container'>
  <div className='row'>
  <div className='col-md-12 outerDiv pt-4'>
<div className='col-md-6'>
  <div className='header'>
  <img src={imge1} alt="cxfdsf" className='imge1' />
  <p className='para1'>Civitas
    Foundementa
  </p>
  </div>

</div>
<div className='col-md-6 header2' >
  <div className='div1'>
 
<button className='btn firstBtn'>
<img className='imge2' src={imge3} alt="Snow"/>
  Etherum
</button>
  </div>
  <div className='div2'>
 
  <button className='btn secondBtn'>
  <img className='imge2' src={imge2} alt="Snow"/>
  0x609...914c
</button>
  </div>
</div>
  </div>
  </div>
</div>
    </div>

  </div>;
};

export default Header;

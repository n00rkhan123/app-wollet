import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import   './Energize.css';
;


const Energize = () => {
  return <div>
    <div className='energizebackGroud'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 energizeOuter'>
            <div className='energizeHeadingDiv'>
              <p className='energizeHeading'>
                Energize
              </p>
            </div>
            <div className='ebergizeInput'>
              <form action='/action_page.php'>
                <div className='form-group energizeDiv1'>
                  {/* <label for='email'>Email address:</label> */}
                  <input type='email' className='form-control energizeForm' placeholder='EnterTX Hash' id='email'/>
                </div>
              </form>
            </div>

            <div className='energizeDiv1'>
              <button className='btn btn-success energizeBtn'>
                Energize
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>;
};

export default Energize;

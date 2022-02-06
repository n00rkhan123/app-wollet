import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Nft.css'
const Nft = () => {
  return <div>

    <div className='backGroud1'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 outerDiv1'>
            <div>
              <p className='nftHeading1'>
                Fundementa Network's
              </p>
            </div>
            <div>
              <h1 className='nftHeading2'>
                NFT
              </h1>
            </div>
            <div>
              <p className='paraNft'>
                Fundamenta's turning one! In celebration of this milestone, we've decided to immortalize the moment in an NFT, cause why not?
                So feel free to mint your own. Just need 100 fmta in your wallet and you can mint a different NFT on each chain. Get in and collect them all so you can say "I was there!" to your grandkids.
              </p>
            </div>
            <div>
              <button className='btn btn-success nftBtn'>
                MINT
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Nft;

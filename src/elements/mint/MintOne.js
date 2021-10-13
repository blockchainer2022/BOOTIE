/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { FiPhone, FiMapPin, FiFile, FiArrowRight } from "react-icons/fi";

const AboutFive = () => {
  return (
    <div className="about-style-5 rn-section-gap">
      <div className="container">
        {/* Start Section - Coming Soon  */}
        <div className="row">
          <div className="col-lg-10 mt--40 offset-lg-1">
            <div className="row row--0 about-wrapper align-items-center theme-shape">
              <div className="col-lg-12 mt_md--30 mt_sm--30">
                <div className="content text-center">
                  <div className="inner">
                    <h2 className="mt--20 text--blackest">MINT</h2>
                    <h5 className="mt--20 text--blackest">
                      Mint up to 20 of 10,000 unique Bubbly Booties
                    </h5>
                    <h6 className="mt--20 text--blackest">
                      Current Mint Status: <b>Scheduled for *date*</b>
                    </h6>
                    <a
                      className="btn-default btn-medium btn-icon mt--20 mb--20"
                      target="_blank"
                      href="#"
                    >
                      Connect Metamask Wallet
                    </a>
                    <h6 className="mt--20 text--blackest">
                      Cost per mint: <b>0.069 ETH</b>
                    </h6>
                    <p class="mint--status">Metamask Wallet Not Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section - Coming Soon  */}

        {/* Start Section 1  - Connect Wallet */}
        <div className="row">
          <div className="col-lg-10 mt--40 offset-lg-1">
            <div className="row row--0 about-wrapper align-items-center theme-shape">
              <div className="col-lg-12 mt_md--30 mt_sm--30">
                <div className="content text-center">
                  <div className="inner">
                    <h2 className="mt--20 text--blackest">MINT</h2>
                    <h5 className="mt--20 text--blackest">
                      Mint up to 20 of 10,000 unique Bubbly Booties
                    </h5>
                    <h6 className="mt--20 text--blackest">
                      Current Mint Status: <b>Live</b>
                    </h6>
                    <a
                      className="btn-default btn-medium btn-icon mt--20 mb--20"
                      target="_blank"
                      href="#"
                    >
                      Connect Metamask Wallet
                    </a>
                    <h6 className="mt--20 text--blackest">
                      Cost per mint: <b>0.069 ETH</b>
                    </h6>
                    <p class="mint--status">Metamask Wallet Not Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section 1 - Connect Wallet  */}

        {/* Start Section 2 - Mint */}
        <div className="row">
          <div className="col-lg-10 mt--40 offset-lg-1">
            <div className="row row--0 about-wrapper align-items-center theme-shape">
              <div className="col-lg-12 mt_md--30 mt_sm--30">
                <div className="content text-center">
                  <div className="inner">
                    <h2 className="mt--20 text--blackest">MINT</h2>
                    <h5 className="mt--20 text--blackest">
                      Mint up to 20 of 10,000 unique Bubbly Booties
                    </h5>
                    <h6 className="mt--20 text--blackest">
                      Current Mint Status: <b>Live</b>
                    </h6>
                    <div className="form-group">
                      <input
                        class="mint--quantity"
                        type="number"
                        name="quantity"
                        placeholder="How many?"
                        min="1"
                        max="20"
                        required
                      />
                      <a
                        className="btn-default btn-medium btn-icon mt--20 mb--20"
                        target="_blank"
                        href="#"
                      >
                        Mint
                      </a>
                    </div>
                    <h6 className="mt--20 text--blackest">
                      Cost per mint: <b>0.069 ETH</b>
                    </h6>
                    <p class="mint--status">Wallet Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section 2 - Mint */}

        {/* Start Section 3 - Processing  */}
        <div className="row">
          <div className="col-lg-10 mt--40 offset-lg-1">
            <div className="row row--0 about-wrapper align-items-center theme-shape">
              <div className="col-lg-12 mt_md--30 mt_sm--30">
                <div className="content text-center">
                  <div className="inner">
                    <h3 className="mt--20 text--blackest">
                      Processing, please wait..
                    </h3>
                    <p class="mint--status">Do not refresh this page</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section 3 - Processing  */}

        {/* Start Section 4 - Success  */}
        <div className="row">
          <div className="col-lg-10 mt--40 offset-lg-1">
            <div className="row row--0 about-wrapper align-items-center theme-shape">
              <div className="col-lg-12 mt_md--30 mt_sm--30">
                <div className="content text-center">
                  <div className="inner">
                    <h2 className="mt--20 text--blackest">Success</h2>
                    <h5 className="mt--20 text--blackest">
                      You just minted <b>20</b> unique Bubbly Booties!
                    </h5>
                    <h6 className="mt--20 text--blackest">
                      At the time of the reveal, please head over to your
                      OpenSea profile to see your minted assets.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Section 4 - Success  */}
      </div>
    </div>
  );
};
export default AboutFive;

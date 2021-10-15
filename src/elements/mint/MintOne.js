/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import moment from "moment";
const AboutFive = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
}) => {
  const [value, setValue] = useState(0);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const difference = +new moment("2021-09-20 00:00:00").utc() - +new Date();
  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
  // console.log(difference);
  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const mintHandler = () => {
    mint(value);
  };
  return (
    <div className="about-style-5 rn-section-gap">
      <div className="container">
        <Main
          days={days}
          minutes={minutes}
          hours={hours}
          seconds={seconds}
          account={account}
          displayPrice={displayPrice}
          loadWeb3={loadWeb3}
          difference={difference}
          value={value}
          setValue={setValue}
          valueHandler={valueHandler}
          mintHandler={mintHandler}
        />

        {/* <CommingSoon
          days={days}
          minutes={minutes}
          hours={hours}
          seconds={seconds}
          account={account}
          displayPrice={displayPrice}
          loadWeb3={loadWeb3}
        />

        <ConnectWallet
          account={account}
          displayPrice={displayPrice}
          loadWeb3={loadWeb3}
        />

        <ConnectWallet />
        <Mint /> */}
        {/* <Processing />
        <Success /> */}
      </div>
    </div>
  );
};
export default AboutFive;

const Main = ({
  days,
  hours,
  minutes,
  seconds,
  account,
  displayPrice,
  loadWeb3,
  difference,
  value,
  valueHandler,
  mintHandler,
}) => (
  <Wrapper>
    <h2 className="mt--20 text--blackest">MINT</h2>
    <h5 className="mt--20 text--blackest">
      Mint up to 20 of 10,000 unique Bubbly Booties
    </h5>
    <h6 className="mt--20 text--blackest">
      Current Mint Status: {""}
      {difference > 0 ? (
        <b>
          Scheduled for
          {`  ${days.toString().padStart(2, "0")}:${hours
            .toString()
            .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`}
        </b>
      ) : (
        <b>Live</b>
      )}
    </h6>

    {difference < 0 && account ? (
      <MintForm
        value={value}
        valueHandler={valueHandler}
        mintHandler={mintHandler}
      />
    ) : (
      <button
        className="btn-default btn-medium btn-icon mt--20 mb--20"
        onClick={() => loadWeb3()}
      >
        {account
          ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
          : "Connect Metamask Wallet"}
      </button>
    )}
    <h6 className="mt--20 text--blackest">
      Cost per mint: <b>{displayPrice} ETH</b>
    </h6>
    {!account ? (
      <p class="mint--status">Metamask Wallet Not Connected</p>
    ) : (
      <p class="mint--status">Metamask Wallet Connected</p>
    )}
  </Wrapper>
);

// const ConnectWallet = ({ account, displayPrice, loadWeb3 }) => (
//   <Wrapper>
//     <h2 className="mt--20 text--blackest">MINT</h2>
//     <h5 className="mt--20 text--blackest">
//       Mint up to 20 of 10,000 unique Bubbly Booties
//     </h5>
//     <h6 className="mt--20 text--blackest">
//       Current Mint Status: <b>Live</b>
//     </h6>
//     <button
//       className="btn-default btn-medium btn-icon mt--20 mb--20 "
//       onClick={() => loadWeb3()}
//     >
//       {account
//         ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
//         : "Connect Metamask Wallet"}
//     </button>
//     <h6 className="mt--20 text--blackest">
//       Cost per mint: <b>{displayPrice} ETH</b>
//     </h6>
//     {!account ? (
//       <p class="mint--status">Metamask Wallet Not Connected</p>
//     ) : (
//       <p class="mint--status">Metamask Wallet Connected</p>
//     )}
//   </Wrapper>
// );

const MintForm = ({ value, valueHandler, mintHandler }) => (
  <div className="form-group">
    <input
      class="mint--quantity"
      type="number"
      name="quantity"
      placeholder="How many?"
      min="1"
      max="20"
      required
      value={value}
      onChange={valueHandler}
    />

    <button
      className="btn-default btn-medium btn-icon mt--20 mb--20"
      onClick={mintHandler}
    >
      Mint
    </button>
  </div>
);

// const Mint = () => (
//   <Wrapper>
//     <h2 className="mt--20 text--blackest">MINT</h2>
//     <h5 className="mt--20 text--blackest">
//       Mint up to 20 of 10,000 unique Bubbly Booties
//     </h5>
//     <h6 className="mt--20 text--blackest">
//       Current Mint Status: <b>Live</b>
//     </h6>
//     <div className="form-group">
//       <input
//         class="mint--quantity"
//         type="number"
//         name="quantity"
//         placeholder="How many?"
//         min="1"
//         max="20"
//         required
//       />

//       <button className="btn-default btn-medium btn-icon mt--20 mb--20">
//         Mint
//       </button>
//     </div>
//     <h6 className="mt--20 text--blackest">
//       Cost per mint: <b>0.069 ETH</b>
//     </h6>
//     <p class="mint--status">Wallet Connected</p>
//   </Wrapper>
// );

const Processing = () => (
  <Wrapper>
    <h3 className="mt--20 text--blackest">Processing, please wait..</h3>
    <p class="mint--status">Do not refresh this page</p>
  </Wrapper>
);

const Success = () => (
  <Wrapper>
    <h2 className="mt--20 text--blackest">Success</h2>
    <h5 className="mt--20 text--blackest">
      You just minted <b>20</b> unique Bubbly Booties!
    </h5>
    <h6 className="mt--20 text--blackest">
      At the time of the reveal, please head over to your OpenSea profile to see
      your minted assets.
    </h6>
  </Wrapper>
);

const Wrapper = ({ children }) => (
  <div className="row">
    <div className="col-lg-10 mt--40 offset-lg-1">
      <div className="row row--0 about-wrapper align-items-center theme-shape">
        <div className="col-lg-12 mt_md--30 mt_sm--30">
          <div className="content text-center">
            <div className="inner">{children}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// const CommingSoon = ({
//   days,
//   hours,
//   minutes,
//   seconds,
//   account,
//   displayPrice,
//   loadWeb3,
// }) => (
//   <Wrapper>
//     <h2 className="mt--20 text--blackest">MINT</h2>
//     <h5 className="mt--20 text--blackest">
//       Mint up to 20 of 10,000 unique Bubbly Booties
//     </h5>
//     <h6 className="mt--20 text--blackest">
//       Current Mint Status: {""}
//       <b>
//         Scheduled for
//         {`  ${days.toString().padStart(2, "0")}:${hours
//           .toString()
//           .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
//           .toString()
//           .padStart(2, "0")}`}
//       </b>
//     </h6>
//     <button
//       className="btn-default btn-medium btn-icon mt--20 mb--20"
//       onClick={() => loadWeb3()}
//     >
//       {account
//         ? account.slice(0, 8) + "..." + account.slice(account.length - 5)
//         : "Connect Metamask Wallet"}
//     </button>
//     <h6 className="mt--20 text--blackest">
//       Cost per mint: <b>{displayPrice} ETH</b>
//     </h6>
//     {!account ? (
//       <p class="mint--status">Metamask Wallet Not Connected</p>
//     ) : (
//       <p class="mint--status">Metamask Wallet Connected</p>
//     )}
//   </Wrapper>
// );

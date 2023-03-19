import './App.css';


function App() {
    const connectWallet = async() => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          // metamask is installed
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
          console.log(accounts[0]);
        }catch(err) {
          console.error(err.message);
        }
      } else {
        console.log("Please install metamask");
      }
    }


    return (
    <button onClick={connectWallet}>Connect Wallet</button>
  );
}








export default App;
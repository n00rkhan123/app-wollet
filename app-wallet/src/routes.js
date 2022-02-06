import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Nft from "./components/nft/Nft";
import Energize from "./components/energize/Energize";
import Wrap from "./components/wrap/Wrap";
import Stake from "./components/stake/Stake";
import Home from "./components/home/Home";
import Teleport from "./components/teleport/Teleport";
import Mining from "./components/mining/Mining";
import Unwrap from "./components/unwrape/Unwrap";

const RoutesComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/wrap" element={<Wrap />} />
        <Route path="/energize" element={<Energize />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/teleport" element={<Teleport />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/unwrap" element={<Unwrap />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};
export default RoutesComponent;

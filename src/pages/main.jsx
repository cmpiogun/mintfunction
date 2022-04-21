import { Header } from "../components/home/header";
import { Features } from "../components/home/features";
import { Banner } from "../components/banner";
import { Banner2 } from "../components/banner2";
import { Roadmap } from "../components/home/roadmap";
import { Roadmap2 } from "../components/home/roadmap2";
import { Footer } from "../components/footer";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Main = (props) => {
  const { metamaskConnected, account, setMetamaskConnnected } = props;
  return (
    <div>
      <Header
        metamaskConnected={metamaskConnected}
        setMetamaskConnnected={setMetamaskConnnected}
        account={account}
      />
      <Roadmap2 />
      {/* <Roadmap /> */}
      <Features />
      <Footer />
    </div>
  );
};

export default Main;

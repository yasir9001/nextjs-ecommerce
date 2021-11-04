import type { NextPage } from "next";
import Header from "./../src/components/Header/Header";
import Jumbotron from "./../src/components/Jumbotron/Jumbotron";
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
    </div>
  );
};

export default Home;

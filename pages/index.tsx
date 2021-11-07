import type { NextPage } from "next";
import Container from "../src/components/Container/container";
import FeaturedProducts from "../src/components/FeaturedProducts/FeaturedProducts";
import Header from "./../src/components/Header/Header";
import Jumbotron from "./../src/components/Jumbotron/Jumbotron";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Container>
        <FeaturedProducts />
      </Container>
    </div>
  );
};

export default Home;

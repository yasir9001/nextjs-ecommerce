import type { NextPage } from "next";
import Container from "../src/components/Container/container";
import FeaturedProducts from "../src/components/FeaturedProducts/FeaturedProducts";
import LandingInfo from "../src/components/LandingInfo/LandingInfo";
import LatestProducts from "../src/components/LatestProducts/LatestProducts";
import TrendingProducts from "../src/components/TrendingProducts/TrendingProducts";
import WeOffer from "../src/components/WeOffer/WeOffer";
import Header from "./../src/components/Header/Header";
import Jumbotron from "./../src/components/Jumbotron/Jumbotron";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      {/* <Jumbotron />
      <div className="my-24">
        <Container>
          <h2 className="text-4xl text-secondary font-bold text-center mb-12">
            Featured Products
          </h2>
          <FeaturedProducts />
        </Container>
        <Container>
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">
            Latest Products
          </h2>
          <LatestProducts />
        </Container>
        <Container>
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">
            What We Offer!
          </h2>
          <WeOffer />
        </Container>
      </div>
      <LandingInfo /> */}
      <div className="my-24">
        <h2 className="text-4xl text-secondary font-bold text-center mb-12">
          Trending Products
        </h2>
        <Container>
          <TrendingProducts />
        </Container>
      </div>
    </div>
  );
};

export default Home;

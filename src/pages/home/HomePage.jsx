import Banner from "../../components/homepage/banner/Banner";
import AllFriends from "./AllFriends";

const HomePage = () => {
  return (
    <div className="bg-[#F8FAFC] py-10 md:py-20">
      <div className="container mx-auto">
        <Banner></Banner>
        <AllFriends></AllFriends>
      </div>
    </div>
  );
};

export default HomePage;

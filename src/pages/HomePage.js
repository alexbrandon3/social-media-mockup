import NavBar from "../components/homepage/NavBar";
import SideBar from "../components/homepage/SideBar";
import Feed from "../components/homepage/Feed";
import RightBar from "../components/homepage/RightBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex w-full h-full">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default HomePage;

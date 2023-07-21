import Wrapper from "./home.module.css";
import Menu from "@/componets/menu/menu";
const Home = () => {
  return (
    <div className={Wrapper.h1}>
      <h1>Home</h1>
      <Menu />
    </div>
    
    
  );
};

export default Home;

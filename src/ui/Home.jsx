import { useSelector } from "react-redux";
import CreateUser from"../features/user/CreateUser"
import Button from "./Button";

function Home() {

  const username=useSelector((state)=>state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      {/* /*WHen the Screen breaks over 640 or the break point then those classes are applied to the elements ulta soch rha hu tabse   */}
      <h1 className="text-xl text-stone-700 font-semibold mb-8 ">
        The best pizza. 
        <br />
        <span className="text-yellow-500 mb-5 ">Straight out of the oven, straight to <br /> you.</span>
      </h1> 
        {username===''?<CreateUser/>:<Button to='menu' type="primary">Continue Ordering {username}</Button> }
    </div>
  );
}

export default Home;

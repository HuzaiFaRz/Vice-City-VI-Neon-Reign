import { Fragment } from "react";
import VI_Svg from "./Components/VI_Svg";

const App = () => {
  return (
    <Fragment>
      <main className="w-full h-screen fixed top-0 left-0 z-100 overflow-hidden flex justify-center items-center bg-[#000]">
        <VI_Svg />
      </main>
    </Fragment>
  );
};

export default App;

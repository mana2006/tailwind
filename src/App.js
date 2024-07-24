import { useEffect, useState } from "react";
import "./App.css";
import Content from "./Components/Content/Content";
import NavBar from "./Components/NavBar/NavBar";
import Slogan from "./Components/Slogan/Slogan";

function App() {
  const [isMobile, setIsMobile] = useState();
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width > 500) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [windowSize]);
  return (
    <div className="overflow-y-auto font-sora h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 to dark:to-purple-700 from-white to-pink-500 dark:text-white text-dark md:p-10">
      <NavBar isMobile={isMobile}/>
      <Slogan />
      <Content />
    </div>
  );
}

export default App;

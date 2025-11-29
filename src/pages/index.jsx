import { useEffect, useState } from "react";
import DesktopHome from "@/components/Home/DesktopHome";
import MobileHome from "@/components/Home/mobile/MobileHome";

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1020px)");

    setIsDesktop(mediaQuery.matches);

    const handleChange = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isDesktop ? <DesktopHome /> : <MobileHome />;
};

export default Home;

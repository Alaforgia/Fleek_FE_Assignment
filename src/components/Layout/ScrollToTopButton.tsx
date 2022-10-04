import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToTopButton = ({ children }: { children: React.ReactNode }) => {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const showScroll = window.scrollY > 400;
      if (showScroll) {
        setShowScroll(true);
      } else setShowScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fade in={showScroll}>
      <Box
        onClick={scrollToTop}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
};

export default ScrollToTopButton;

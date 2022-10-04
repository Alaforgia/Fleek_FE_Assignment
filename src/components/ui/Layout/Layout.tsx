import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

type LayoutProps = {
  children: React.ReactNode;
  isDetailPage: boolean;
};

const Layout = ({ children, isDetailPage = false }: LayoutProps) => {
  return (
    <Container maxWidth="lg">
      <Navbar isDetailPage={isDetailPage} />
      <SideBar />
      <Box component="main" sx={{ marginTop: "64px" }}>
        {children}
      </Box>
      <Footer />
    </Container>
  );
};

export default Layout;

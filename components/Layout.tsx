import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout: React.FC = (children) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

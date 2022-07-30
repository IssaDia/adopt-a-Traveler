import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: React.FC<LayoutProps> = (children) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

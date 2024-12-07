import Loader from "./page-transition";
import SmoothScrolling from "./smooth-scroll";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Loader>{children}</Loader>;
};

export default Providers;

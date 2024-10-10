import Loader from "./page-transition";
import SmoothScrolling from "./smooth-scroll";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SmoothScrolling>
      <Loader>{children}</Loader>
    </SmoothScrolling>
  );
};

export default Providers;

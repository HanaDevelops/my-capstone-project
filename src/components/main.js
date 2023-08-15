import About from "./about";
import Description from "./description";
import Specials from "./specials";
import Testimonials from "./testimonials";

function Main() {
  return (
    <main className="main">
      <Description />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};

export default Main;
import {
  Navbar,
  Services,
  Schedule,
  PopularCar,
  RecommendedCars,
  Footer,
} from "./sections";
const App = () => (
  <main className="bg-[#F6F7F9] custom-font">
    <section className="bg-white border border-[#c3d4e966] mb-8">
      <Navbar />
    </section>
    <section>
      <Services />
    </section>
    <section>
      <Schedule />
    </section>
    <section>
      <PopularCar />
    </section>
    <section>
      <RecommendedCars />
    </section>
    <section className="bg-white">
      <Footer />
    </section>
  </main>
);
export default App;

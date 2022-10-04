import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Navbar";
import data from "./data";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;500&display=swap');
</style>;

function App() {
  const cards = data.map((item) => {
    return (
      <Hero
        key={item.id}
        item= {item}
      />
    );
  });
  return (
    <>
      <Nav />
      {cards}
    </>
  );
}

export default App;

import Header from "./components/Header";
import Home from "./components/Home";
import bg from "./components/img/bg.jpeg";

function App() {
  return (
    <>
      <div className="w-full h-screen scroll-smooth relative">
        <div
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[730px] max-w-[1600px] mx-auto bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <Header />
        </div>
      </div>
      <div className="w-[1600px] h-[835px] ">
        <Home />
      </div>
    </>
  );
}

export default App;

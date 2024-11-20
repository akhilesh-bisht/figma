import Header from "./components/Header";
import Home from "./components/Home";
import bg from "./components/img/bg.jpeg";

function App() {
  return (
    <>
      <div className="w-full h-screen sm:h-[67%] scroll-smooth relative">
        <div
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[730px] max-w-full mx-auto bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <Header />
        </div>
      </div>
      <div className="w-full h-auto px-4 md:w-full md:h-[835px]">
        <Home />
      </div>
    </>
  );
}

export default App;

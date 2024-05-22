// states and hooks

// components

// images
import TnTLogo from "../../public/images/TNT_yellow.svg";
import HelloImg from "../../public/images/2cats2dogs-homepg_360.png";

function HomePage() {
  return (
    <main>
      <div className="w-40 h-40 m-auto mt-10">
        <img src={TnTLogo} alt="TnT Logo" className="" />
      </div>
      <div className="w-80 h-80 m-auto">
        <img src={HelloImg} alt="Hello Img" className="w-80 h-80" />
      </div>
      <div className="flex justify-center mt-10 text-3xl font-bold">Hello!</div>
      <div className="flex justify-center mt-5 text-center">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Cras
        <br /> vel libero ligula.
      </div>
    </main>
  );
}

export default HomePage;

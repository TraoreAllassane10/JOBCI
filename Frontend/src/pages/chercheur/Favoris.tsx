import CardOffre from "../../components/CardOffre";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Favoris = () => {
  return (
    <>
      <NavBar />
      <div className="mx-5 md:max-w-7xl md:mx-auto my-16">
        <h1 className="text-(--text-primary) font-bold text-3xl mb-6">
          Mes Favoris
        </h1>

        <div className="space-y-4 ">
          <CardOffre />
          <CardOffre />
          <CardOffre />
          <CardOffre />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Favoris;

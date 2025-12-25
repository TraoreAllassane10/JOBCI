import CardOffre from "../../components/CardOffre";
import DetailOffre from "../../components/DetailOffre";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Favoris = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto my-16">
        <h1 className="text-(--text-primary) font-bold text-3xl mb-6">
          Mes Favoris
        </h1>

        <div className="flex gap-8">
          <div className="space-y-4 w-3/4">
            <CardOffre />
            <CardOffre />
            <CardOffre />
            <CardOffre />
          </div>

          <div className="w-1/4">
            <DetailOffre/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Favoris;

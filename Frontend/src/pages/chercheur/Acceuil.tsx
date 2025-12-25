import { MapPin, Search } from "lucide-react";
import Hero from "../../components/Hero";
import Filtres from "../../components/Filtres";
import CardOffre from "../../components/CardOffre";

import Footer from "../../components/Footer";

const Acceuil = () => {
  return (
    <>
      <Hero />

      {/* Les champs de recherche */}
      <div className="max-w-7xl md:mx-auto mx-5 relative -top-20 md:-top-10 grid grid-cols-2 md:grid-cols-3 gap-2">
        {/* Recherche par titre */}
        <div className="bg-white shadow p-1 md:p-3 w-40 md:w-100 flex place-items-center justify-between rounded-lg">
          <div className="flex flex-col gap-2">
            <label className="text-(--text-secondary) text-sm">
              Recherche par titre
            </label>
            <input type="text" className="outline-none text-lg font-semibold" />
          </div>

          <Search size={32} className="text-(--text-secondary)" />
        </div>

        {/* Recherche par commune */}
        <div className="bg-white shadow p-1 md:p-3 w-40 md:w-100 flex place-items-center justify-between rounded-lg">
          <div className="flex flex-col gap-2">
            <label className="text-(--text-secondary) text-sm">
              Recherche par commune
            </label>
            <input type="text" className="outline-none text-lg font-semibold" />
          </div>

          <MapPin size={32} className="text-(--text-secondary)" />
        </div>

        {/* Bouton de recherche */}
        <button className="bg-(--color-primary) hover:bg-orange-400 transition  shadow p-3 w-80 rounded-lg text-white text-xl font-medium">
          Recherche
        </button>
      </div>

      {/* Affichage des cartes, filtres ainsi que les dtails */}
      <div className="mx-5 flex gap-10">
        <div className="1/4">
          <Filtres />
        </div>

        {/* Cartes */}
        <div className="flex flex-col gap-6 w-3/4">
          <CardOffre />
          <CardOffre />
          <CardOffre />
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Acceuil;

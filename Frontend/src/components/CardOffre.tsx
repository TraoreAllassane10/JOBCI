import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const CardOffre = () => {
  return (
    <div className="flex flex-col gap-6 justify-evenly bg-white shadow rounded-md hover:shadow-2xl cursor-pointer transition">
      <div className="p-4 flex flex-col gap-6 ">
        <Link to="/offres/1">
          <div>
            <h1 className="text-(--text-primary) font-bold text-2xl">Nounou</h1>
            <span className="text-(--text-secondary) font-medium">
              Cocody - 2 plateaux
            </span>
          </div>
        </Link>

        <div className="grid grid-cols-4">
          <div>
            <p className="text-(--text-secondary) font-medium">Type contrat</p>
            <p className="text-(--text-primary) font-semibold">Temps plein</p>
          </div>
          <div>
            <p className="text-(--text-secondary) font-medium">Type salaire</p>
            <p className="text-(--text-primary) font-semibold">
              Salaire mensuel
            </p>
          </div>
          <div>
            <p className="text-(--text-secondary) font-medium">Salaire</p>
            <p className="text-(--text-primary) font-semibold">50 000 fcfa</p>
          </div>
          <div>
            <p className="text-(--text-secondary) font-medium">Catégorie</p>
            <p className="text-(--text-primary) font-semibold">
              Service domestique
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#EBF3F8] px-4 py-2">
        <div className="flex gap-4 justify-between">
          <span className="text-sm text-(--text-secondary)">
            Posté, il y a 3 min
          </span>
          <div className="flex place-items-center gap-2">
            <button>
              <Bookmark />
            </button>
            <span className="text-sm text-(--text-secondary)">Sauvegarder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOffre;


import { categories, commune, typeContrats } from "../assets/data";

const Filtres = () => {
  return (
    <div>
      {/* Filtres */}
      <div >
        {/* Tittre et bouton effacer */}
        <div className="flex justify-between place-items-center mb-4">
          <h2 className="text-xl text-(--text-primary) font-semibold">
            Filtres
          </h2>
          <a href="" className="text-sm text-(--text-secondary)">
            Effacer
          </a>
        </div>

        {/* Catégorie */}
        <div>
          <h3 className="text-sm text-(--text-secondary) mb-2">Catégories</h3>
          {categories.map((categorie) => (
            <div key={categorie.id} className="flex gap-4">
              <input type="checkbox" />
              <span className="text-(--text-primary)">
                {categorie.nom} ({categorie.total})
              </span>
            </div>
          ))}
        </div>

        <hr className="border border-gray-300 mt-2" />

        {/* Communes */}
        <div>
          <h3 className="text-sm text-(--text-secondary) mb-2">Communes</h3>
          {commune.map((commune) => (
            <div key={commune.id} className="flex gap-4">
              <input type="checkbox" />
              <span className="text-(--text-primary)">
                {commune.nom} ({commune.total})
              </span>
            </div>
          ))}
        </div>

        <hr className="border border-gray-300 mt-2" />

        {/* Type de contrat */}
        <div>
          <h3 className="text-sm text-(--text-secondary) mb-2">
            Type de contrat
          </h3>
          {typeContrats.map((type) => (
            <div key={type.id} className="flex gap-4">
              <input type="checkbox" />
              <span className="text-(--text-primary)">
                {type.nom} ({type.total})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filtres;

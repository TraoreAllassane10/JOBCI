import { ArrowLeft, ArrowRight } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const Offres = () => {
  return (
    <DashboardLayout>
      <div className="mb-4">
        <h1 className="text-2xl text-(--color-secondary) font-bold">
          Gestion des offres
        </h1>
        <p className="text-md text-(--text-secondary)">
          Création, visualisation et gestion des offres
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        <div className="shadow p-4 rounded-md bg-white">
          <h3 className="text-(--text-secondary)">Offres postées</h3>
          <p className="text-(--text-primary) text-2xl font-bold">287</p>
        </div>

        <div className="shadow p-4 rounded-md bg-white">
          <h3 className="text-(--text-secondary)">Candidatures</h3>
          <p className="text-(--text-primary) text-2xl font-bold">587</p>
        </div>

        <div className="shadow p-4 rounded-md bg-white">
          <h3 className="text-(--text-secondary)">Offres en cours</h3>
          <p className="text-(--text-primary) text-2xl font-bold">5</p>
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded-md">
        <div className="flex justify-between place-items-center">
          <h1 className="text-(--text-primary) font-semibold">
            Liste des offres
          </h1>
          <button className="bg-(--color-primary) hover:bg-orange-400 p-1 text-sm text-white rounded-md cursor-pointer">
            Créer une nouvelle offre
          </button>
        </div>

        <hr className="my-4" />

        <table className="table-auto w-full bg-white text-sm md:text-md ">
          <thead className="bg-(--color-secondary) text-white">
            <tr>
              <th>Titre de l'offre</th>
              <th>Type de contrat</th>
              <th>Type de salaire</th>
              <th>Salaire</th>
              <th>Candidature</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>Nounou</td>
              <td>Temps plein</td>
              <td>Salaire journalier</td>
              <td>50 000 fcfa</td>
              <td>
                <span className="p-1 bg-green-100 rounded-full">50</span>
              </td>
            </tr>
            <tr>
              <td>Nounou</td>
              <td>Temps plein</td>
              <td>Salaire journalier</td>
              <td>50 000 fcfa</td>
              <td>
                <span className="p-1 bg-green-100 rounded-full">50</span>
              </td>
            </tr>
            <tr>
              <td>Nounou</td>
              <td>Temps plein</td>
              <td>Salaire journalier</td>
              <td>50 000 fcfa</td>
              <td>
                <span className="p-1 bg-green-100 rounded-full">50</span>
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="my-4" />

        <div className="flex justify-between place-items-center">
          <span className="text-(--text-secondary) text-sm">Page 1 sur 10</span>
          <div className="flex gap-2">
            <button className="flex place-items-center text-white hover:bg-blue-500 text-sm bg-(--color-secondary) px-1">
              <ArrowLeft /> Précédent
            </button>
            <button className="flex place-items-center text-white hover:bg-blue-500 text-sm bg-(--color-secondary) px-1">
              Suivant
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Offres;

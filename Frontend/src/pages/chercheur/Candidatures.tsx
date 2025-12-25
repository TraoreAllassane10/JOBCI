import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const Candidatures = () => {
  return (
    <>
      <NavBar />
      <div className="mx-2 md:max-w-7xl md:mx-auto my-16">
        <h1 className="text-(--text-primary) font-bold text-lg md:text-3xl mb-6">
          Mes Candidatures
        </h1>

        <table className="table-auto w-full bg-white text-sm md:text-lg">
          <thead className="bg-(--color-secondary) text-white">
            <tr>
              <th>Titre de l'offre</th>
              <th>Localisation</th>
              <th>Date</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>Nounou</td>
              <td>Cocody - 2 plateaux</td>
              <td>25/12/25</td>
              <td><span className="bg-green-400/75 text-white p-1">acceptée</span></td>
            </tr>
            <tr>
              <td>Nounou</td>
              <td>Cocody - 2 plateaux</td>
              <td>25/12/25</td>
              <td><span className="bg-red-400/75 text-white p-1">refusée</span></td>
            </tr>
            <tr>
              <td>Nounou</td>
              <td>Cocody - 2 plateaux</td>
              <td>25/12/25</td>
              <td><span className="bg-green-400/75 text-white p-1">acceptée</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Candidatures;

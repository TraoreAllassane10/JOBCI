import { Bookmark } from "lucide-react";
import NavBar from "../../components/NavBar";

const Detail = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-5 md:max-w-7xl md:mx-auto my-16">
        <div className="bg-white p-4 rounded">
          <div className="mb-4">
            <h1 className="text-4xl text-(--text-primary) font-bold">Nounou</h1>
            <p className="text-md text-(--text-secondary)">
              Service domestique
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-2 mb-2">
            <div>
              <p className="text-(--text-secondary) font-medium">
                Localisation
              </p>
              <p className="text-(--text-primary) font-semibold">
                Cocody - 2 plateux
              </p>
            </div>

            <div>
              <p className="text-(--text-secondary) font-medium">
                Type contrat
              </p>
              <p className="text-(--text-primary) font-semibold">Temps plein</p>
            </div>

            <div>
              <p className="text-(--text-secondary) font-medium">
                Type salaire
              </p>
              <p className="text-(--text-primary) font-semibold">
                Salaire mensuel
              </p>
            </div>

            <div>
              <p className="text-(--text-secondary) font-medium">Salaire</p>
              <p className="text-(--text-primary) font-semibold">50 000 fcfa</p>
            </div>
          </div>

          <span className="text-sm text-(--text-secondary) ">
            Posté, il y a 3 min
          </span>

          <div className="flex gap-2 mt-4">
            <button className="bg-(--color-primary) px-10 py-5 text-white font-semibold rounded-md shadow-md hover:bg-orange-400 transition">
              Postuler maintenant
            </button>
            <button className="bg-(--color-secondary) hover:bg-blue-400 p-5 rounded-md transition">
              <Bookmark className="text-white" />
            </button>
          </div>

          <hr className="border border-gray-300 my-4" />

          <div className="space-y-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-(--text-primary) text-lg font-bold">
                Description
              </h3>
              <p className="text-sm text-(--text-secondary)">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-(--text-primary) text-lg font-bold">
                Critère
              </h3>
              <ul className="text-sm text-(--text-secondary)">
                <li>- Avoir une nouvelle tondeuse</li>
                <li>- Parler le français</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

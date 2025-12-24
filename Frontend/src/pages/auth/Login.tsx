import Logo from "../../components/Logo";
import AuthLayout from "../layouts/AuthLayout";
import GoogleIcon from "../../assets/google-icon.png";

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center justify-around h-screen">
        <div>
          <Logo />
        </div>

        <div className="flex flex-col mx-12 md:mx-36">
          <div className="flex items-center flex-col gap-4 mb-4">
            <h1 className="text-2xl font-bold text-(--text-primary)">
              Connexion
            </h1>
            <p className="text-(--text-secondary) font-light text-sm text-center">
              Entrer votre numero de telephone ou votre email et votre mot de
              passe afin d’accerder à votre compte
            </p>
          </div>

          <form action="" className="flex flex-col gap-6 justify-center ">
            <div className="flex flex-col gap-2">
              <label className="text-(--text-primary)">
                Numéro ou email
              </label>
              <input
                type="text"
                className="px-4 py-3 bg-(--color-input) rounded outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-(--text-primary)">Mot de passe</label>
              <input
                type="text"
                className="px-4 py-3 bg-(--color-input) rounded outline-none"
              />
              <a
                href=""
                className="text-sm flex justify-end text-(--color-secondary)"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <button className="bg-(--color-primary) px-6 py-2 rounded-md text-white font-semibold hover:bg-(--color-primary)/90 transition">
              Connexion
            </button>

            <button className="flex items-center justify-center gap-6 px-6 py-3 text-(--text-secondary) border border-gray-200 rounded-md hover:bg-(--color-secondary) hover:text-white transition">
              <img src={GoogleIcon} alt="Google icon" width={18} height={18} />{" "}
              Se connecter avec google
            </button>
          </form>
        </div>

        <div>
          <p className="text-(--text-secondary)">
            Vous êtes un nouveau ?{" "}
            <a href="" className="text-(--color-secondary)">
              créez un compte
            </a>{" "}
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;

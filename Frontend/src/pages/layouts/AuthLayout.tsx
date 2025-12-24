import type React from "react";
import AuthImg from "../../assets/auth-img.jpg";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex gap-4">
      <div className="w-1/2 hidden md:block">
        <img src={AuthImg} alt="auth image" className="min-h-screen" />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;

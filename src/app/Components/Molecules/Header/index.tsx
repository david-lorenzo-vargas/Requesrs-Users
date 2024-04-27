'use client'

import { ReactElement } from "react";
import { useRouter } from "next/navigation";

import Button from "@/app/Components/Atoms/Button";

import Logo from "@icon/Logo";

const Header = (): ReactElement => {
  const router = useRouter();

  return (
    <div className="px-20 shadow-lg fixed bg-white w-full flex flex-row items-center">
      {/* if the user clicks the logo we redirect them to the first page with users */}
      <Button
        type="button"
        id="headerLogoButton"
        onClick={() => router.push('/')}
      >
        <div className="flex flex-row items-center">
          <Logo size="100"/>
          <span className="text-4xl font-semibold">
            Requesrs
          </span>
        </div>
      </Button>
    </div>
  );
};

export default Header;

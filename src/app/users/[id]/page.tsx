'use client'

import { ReactElement, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Spinner from "@/app/Components/Atoms/Spinner";
import SingleUserCard from "@/app/Components/Molecules/SingleUserCard";

import { User } from "@customTypes/types";

import { fetchUserOne } from "@util/fetchUserOne";

const UserOnePage = (): ReactElement => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const pathName = usePathname();
  const router  = useRouter();

  useEffect(() => {
    //we get userId from URL params and send it to fetchUserOne utility for fetching user by id
    (async () => {
      const pathArr = pathName.split('/');
      const userId = pathArr[pathArr.length - 1];

      const data = await fetchUserOne(userId);

      //if we receive an error 404 from the API meaning the user doesnt exist, we  re redirect the user to 404 route

      if (typeof data === 'number' && data === 404) {
        router.replace(`/404`);
      }

      setUser(() => data.data);
    })();
  }, []);

  return (
    <div className="h-screen flex flex-row mt-60 pt-20 justify-center md:justify-start">
      <div className="md:mx-40 p-5 md:p-20 h-max border border-black border-2 rounded-xl">
        {/* if we have user data we render the user data otherwise we render a loading spinner */}
        {!!user ? (
          <SingleUserCard
            name={user.first_name}
            lastName={user.last_name}
            email={user.email}
            avatar={user.avatar}
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default UserOnePage;

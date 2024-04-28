'use client'

import { useEffect } from "react";

import { useRouter, useSearchParams } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    //on component did mount we redirect the user to /users?page=1
    const params = new URLSearchParams(searchParams);
    params.set('page', '1'); 

    router.replace(`/users?${params.toString()}`);
  }, []);

  return (
    <></>
  );
};

export default HomePage;

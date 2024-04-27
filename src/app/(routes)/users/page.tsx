'use client'

import { ReactElement, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Users from '@/app/Components/Organisms/UsersPage';
import Pagination from "@/app/Components/Molecules/Pagination";
import Spinner from "@/app/Components/Atoms/Spinner";

import { fetchUsers } from "@util/fetchUsers";

import { User, UsersFetchResponse } from "@customTypes/types";

const UsersPage = (): ReactElement => {
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<number | undefined>(undefined);

  const [users, setUsers] = useState<User[]>([]);

  const [enptyData, setEmptyData] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // we get the page number from URL params
    const page = searchParams.get('page');

    if (!!page) {
      (async () => {
        //we fetch users by passing page number from URL params
        const data: UsersFetchResponse = await fetchUsers(page?.toString());

        //we set the state with users fetched, the total number of oages received from API and the current page the user is on based on URL params
        if (!!data.data.length) {
          setUsers(() => data.data);
          setTotalPages(() => data.total_pages);
          setCurrentPage(() => Number(page));
        } else {
          setEmptyData(() => true);
        }
      })();
    }
    //we listen to searchParams to see if the refernce has changed, if it did we refecth users based on the new URL params
  }, [searchParams]);

  //we redirect the user to a new URL, the page will be based on userId received
  const onUser = useCallback((id: number) => {
    router.replace(`/users/${id}`);
  }, []);

  //pagination functions, we update the URL by passing new params
  const onBackPagination = useCallback((c: number) => {
    router.replace(`/users?page=${c - 1}`);
  }, []);

  const onForwardPagination = useCallback((c: number) => {
    router.replace(`/users?page=${c + 1}`);
  }, []);

  const onPage = useCallback((p: number) => {
    router.replace(`/users?page=${p}`);
  }, []);

  return (
    <div className="h-screen flex flex-row items-center justify-center mt-60 pt-20">
      <div className="md:w-33P h-800 flex flex-row items-center justify-center">
        {/* if we have users we render a list of users otherwise we render a loading spinner */}
        {!!users.length ? (
          <div className="w-full">
            <Users users={users} onUser={onUser} />
            <div className="flex flex-row items-center justify-end">
              <Pagination
                totalPages={totalPages ?? 1}
                currentPage={currentPage ?? 1}
                onBackPagination={onBackPagination}
                onForwardPagination={onForwardPagination}
                onPage={onPage}
              />
            </div>
          </div>
        ) : (
          // if the users array comes empty from API we render a warning text saying "There are no users"
          <>
            {enptyData ? (
              <div>
                <span>
                  There are no users
                </span>
              </div>
            ) : (
              <Spinner />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UsersPage;

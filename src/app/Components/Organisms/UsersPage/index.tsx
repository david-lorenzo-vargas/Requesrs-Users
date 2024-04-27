import { ReactElement } from "react";

import User from "@/app/Components/Molecules/User";
import Button from "@/app/Components/Atoms/Button";

import { User as UserType} from "@customTypes/types";

const UsersPage = ({
  users,
  onUser,
}: Props): ReactElement => {
  return (
    <div className="max-h-800 overflow-y-scroll">
      {users.map((u: UserType) => (
        <div key={u.id} className="mb-20 w-full">
          <Button
            type="button"
            id={`${u.first_name}-${u.last_name}-button`}
            onClick={() => onUser(u.id)}
            size="w-full"
          >
            <User
              avatar={u.avatar}
              name={`${u.first_name} ${u.last_name}`}
              email={u.email}
              hoverable
            />
          </Button>
        </div>
      ))}
    </div>
  );
};

interface Props {
  users: UserType[];
  onUser: (id: number) => void;
}

export default UsersPage;

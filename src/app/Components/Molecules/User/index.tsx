import { ReactElement } from "react";

import Image from "next/image";

import Chevron from "@icon/Chevron";
import UserIcon from "@icon/User";

const User = ({
  avatar,
  name,
  email,
  hoverable,
}: Props): ReactElement => {
  return (
    <div
      className={`
        w-full
        flex
        flex-row
        items-center
        justify-between
        border-2
        border-borderGray
        rounded-lg
        py-10 px-20
        ${hoverable && 'hover:bg-black hover:bg-opacity-10'}
      `}
    >
      <div className="flex flex-row items-center">
        <div className="mr-20 h-80 w-80">
          {/* if the user has an avatar we render the avatar otherwise we render an SVG icon */}
          {!!avatar ? (
            <Image
              src={avatar}
              alt={`${name}-avatar`}
              width={80}
              height={80}
              quality={100}
              style={{borderRadius: '500px'}}
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <div className="flex flex-col items-start">
          <div>
            <span className="text-xl font-semibold">
              {name}
            </span>
          </div>
          <div>
            <span className="text-sm">
              {email}
            </span>
          </div>
        </div>

      </div>
      <div>
        <Chevron />
      </div>
    </div>
  );
};

interface Props {
  avatar: string;
  name: string;
  email: string;
  hoverable?: boolean;
}

export default User;

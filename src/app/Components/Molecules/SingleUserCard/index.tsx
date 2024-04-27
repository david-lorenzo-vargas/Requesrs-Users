import { ReactElement } from "react";

import Image from "next/image";

import User from "@icon/User";

const SingleUserCard = ({
  name,
  lastName,
  email,
  avatar
}: Props): ReactElement => {
  return (
    <div className="flex flex-row items-center">
      <div className="mr-5 md:mr-20 rounded-full overflow-hidden">
        {!!avatar ? (
          <Image
            src={avatar}
            alt={`${name}-${lastName}-avatar`}
            width={80}
            height={80}
            quality={100}
          />
        ) : (
          <User />
        )}
      </div>
      <div>
        <div className="flex flex-row items-center">
          <div className="mr-5">
            <span className="text-borderGray">Name:</span>
          </div>
          <div>
            <span className="md:text-xl font-semibold">{name}</span>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="mr-5">
            <span className="text-borderGray">Last Name:</span>
          </div>
          <div>
            <span className="md:text-xl font-semibold">{lastName}</span>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="mr-5">
            <span className="text-borderGray">Email:</span>
          </div>
          <div>
            <span className="text-blue">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  name: string;
  lastName: string;
  email: string;
  avatar: string;
}

export default SingleUserCard;
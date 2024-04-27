import { ReactElement } from "react";

import Error404 from "@icon/404";

const NotFoundRoute = (): ReactElement => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="mb-20">
        <span className="text-5xl font-bold">
          Sorry Error
        </span>
      </div>
      <div className="text-cancelRed mb-20">
        <Error404 />
      </div>
      <div>
        <span className="text-3xl">
          User does not exist
        </span>
      </div>
    </div>
  );
};

export default NotFoundRoute;

//utility for fetching one user based on id received

export const fetchUserOne = async(id: string) => {
  if (!process.env.REQUESRS_API_ENDPOINT_USERS) {
    throw new Error("REQUESRS_API_ENDPOINT_USERS is not defined in environment variables.");
  }

  try {
    const res = await fetch(`${process.env.REQUESRS_API_ENDPOINT_USERS}/users/${id}`);

    if (res.status === 200) {
      return res.json();
    }

    return res.status;
  } catch (error) {
    throw new Error("Ooops! something went wrong");
  }
};
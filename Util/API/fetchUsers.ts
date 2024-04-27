//utility for fetching all users based on page number received

export const fetchUsers = async(page?: string) => {
  if (!process.env.REQUESRS_API_ENDPOINT_USERS) {
    throw new Error("REQUESRS_API_ENDPOINT_USERS is not defined in environment variables.");
  }

  try {
    const res = await fetch(`${process.env.REQUESRS_API_ENDPOINT_USERS}/users${page ? `?page=${page}` : ''}`);

    return res.json();
  } catch (error) {
    throw new Error("Ooops! something went wrong");
  }
};
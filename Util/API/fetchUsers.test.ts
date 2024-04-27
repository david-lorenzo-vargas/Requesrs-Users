import { fetchUsers } from './fetchUsers';

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('fetchUsers', () => {
  it('should fetch data', async () => {
    mockFetch.mockImplementation(() => Promise.resolve({ json: () => [] }));

    await fetchUsers('1');
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(`${process.env.REQUESRS_API_ENDPOINT_USERS}/users?page=1`);
  });

  it("should throw an error if promise is rejected", async () => {
    mockFetch.mockImplementationOnce(() => Promise.reject());

    await expect(fetchUsers()).rejects.toThrow("Ooops! something went wrong");
  });
});
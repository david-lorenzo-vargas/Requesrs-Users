import { fetchUserOne } from './fetchUserOne';

const mockFetch = jest.fn();
global.fetch = mockFetch;

describe('fetchUsers', () => {
  it('should fetch data', async () => {
    mockFetch.mockImplementation(() => Promise.resolve({ json: () => [] }));

    await fetchUserOne('1');
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(`${process.env.REQUESRS_API_ENDPOINT_USERS}/users/1`);
  });

  it("should throw an error if promise is rejected", async () => {
    mockFetch.mockImplementationOnce(() => Promise.reject());

    await expect(fetchUserOne('1')).rejects.toThrow("Ooops! something went wrong");
  });
});
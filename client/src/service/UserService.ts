import HttpService from "./HttpService";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUser = (id: string): any => {
  console.log('being called', id)
  return HttpService.get(`/users/${id}`);
};

export { getUser };

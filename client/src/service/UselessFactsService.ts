import HttpService from "./HttpService";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUselessFact = (): any => {
  return HttpService.get(`/uselessfacts`);
};

export { getUselessFact };

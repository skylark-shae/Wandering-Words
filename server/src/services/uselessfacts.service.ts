
class UselessFactsService {
    public async getUselessFact() {
    return await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    .then((response: Response) => {
      // Do something with response
      return response.json()
    })
    .catch(function (err) {
      console.log("Unable to fetch -", err);
    });
  }
}

export default new UselessFactsService();
import 'whatwg-fetch';
import * as config from '../appConfig';

class TournamentApi {
  static getTournament(id) {
    const url = config.API_URL + "tournaments/" + id;
    return fetch(url, { method: 'GET' }).then(
      response => response.json()
    );
  }
}

export default TournamentApi;
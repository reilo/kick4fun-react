import 'whatwg-fetch';
import * as config from '../appConfig';
import delay from './delay';

class RoundApi {

  static updateRound(tid, rid, body) {
    const url = config.API_URL + "tournaments/" + tid + "/rounds/" + rid;
    return new Promise((resolve, reject) => {
      setTimeout(() => fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }).then(
        response => response.status == 200 ?
          resolve(response.json()) :
          reject(response.statusText)
      ).catch(
        error => reject(error)
      ), delay);
    });
  }

}

export default RoundApi;
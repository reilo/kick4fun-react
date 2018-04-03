import 'whatwg-fetch';
import * as config from '../appConfig';
import delay from './delay';

class MatchApi {

  static updateMatch(tid, rid, mid, body) {
    const url = config.API_URL + "tournaments/" + tid + "/rounds/" + rid + "/matches/" + mid;
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

export default MatchApi;
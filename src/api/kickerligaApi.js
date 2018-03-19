import 'whatwg-fetch';
import * as config from '../appConfig';
import delay from './delay';

class KickerligaApi {

  static getLigaSummary() {
    const url = config.API_URL;
    return new Promise((resolve, reject) => {
      setTimeout(() => fetch(url, { method: 'GET' }).then(
        response => resolve(response.json())
      ).catch(
        error => reject(error)
      ), delay);
    });
  }

  static listPlayers() {
    const url = config.API_URL + "players";
    return new Promise((resolve, reject) => {
      setTimeout(() => fetch(url, { method: 'GET' }).then(
        response => resolve(response.json())
      ).catch(
        error => reject(error)
      ), delay);
    });
  }
  
}

export default KickerligaApi;
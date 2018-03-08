import 'whatwg-fetch';
import * as config from '../appConfig';
import delay from './delay';

class KickerligaApi {
  static getLigaSummary() {
    const url = config.API_URL;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return fetch(url, { method: 'GET' }).then(
          response => resolve(response.json())
        );
      }, delay);
    });
  }

}

export default KickerligaApi;
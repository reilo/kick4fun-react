import 'whatwg-fetch';
import * as config from '../appConfig';
import delay from './delay';

class TemplateApi {

  static listTemplates() {
    const url = config.API_URL + "templates";
    return new Promise((resolve, reject) => {
      setTimeout(() => fetch(url, { method: 'GET' }).then(
        response => resolve(response.json())
      ).catch(
        error => reject(error)
      ), delay);
    });
  }

}

export default TemplateApi;
import axios from 'axios';

class WheaterService {
  constructor() {
    this.apiKey = 'ebd024465e138374770235a87dbab4b7';
  }

  getWheather({latitude, longitude}) {
    return axios.get(
      `http://api.openweathermap.org/data/2.5/weather?APPID=${
        this.apiKey
      }&lat=${latitude}&lon=${longitude}&units=metric`,
    );
  }
}

export default new WheaterService();

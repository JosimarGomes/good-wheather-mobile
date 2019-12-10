import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

class GeolocationService {
  async checkPermission() {
    return await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }

  async requestAuthorization() {
    const permission = await this.checkPermission();

    if (permission === true) {
      return PermissionsAndroid.RESULTS.GRANTED;
    }

    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
  }
  async getCurrentPosition() {
    const hasPermission = await this.requestAuthorization();

    if (hasPermission !== PermissionsAndroid.RESULTS.GRANTED) {
      throw Error('Permission denied');
    }

    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(resolve, reject, {
        // enableHighAccuracy: true,
      });
    });
  }
}

export default new GeolocationService();

import Geocoder from 'react-native-geocoder';

export default class GeocoderService {
  static coordsToAddress({latitude, longitude}) {
    return Geocoder.geocodePosition({lat: latitude, lng: longitude});
  }
}

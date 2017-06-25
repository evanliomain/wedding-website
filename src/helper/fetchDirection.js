import { ALLERAY } from '../data/positions';

export const fetch = lodging => {
  return new Promise((resolve, reject) => {
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin:  new google.maps.LatLng(ALLERAY.lat, ALLERAY.lng),
      destination:  new google.maps.LatLng(lodging.position.lat, lodging.position.lng),
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        resolve(result);
      } else {
        reject(`error fetching directions ${result}`);
      }
    });
  });
}

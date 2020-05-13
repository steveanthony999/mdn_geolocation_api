const coords = {
  latitude: '',
  longitude: ''
};

async function getLocation() {
  //   if ('geolocation' in navigator) {
  //     /* geolocation is available */
  //     navigator.geolocation.getCurrentPosition(position => {
  //       //   doSomething(position.coords.latitude, position.coords.longitude);
  //       return position;
  //     });
  //   } else {
  //     /* geolocation IS NOT available */
  //     console.log('geolocation is NOT available');
  //   }
  const promise = new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const data = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };
        resolve(data);
      });
    }
  });

  const res = await promise;

  return res;
}

getLocation().then(res => console.log(res));

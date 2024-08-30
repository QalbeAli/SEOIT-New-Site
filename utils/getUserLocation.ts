import axios from 'axios';

export const getUserLocation = async () => {
  try {
    // Get the user's IP address
    const ipResponse = await axios.get('https://api.ipify.org?format=json');
    
    const userIp = ipResponse.data.ip;

    // Get the geolocation information using the IP address
    const locationResponse = await axios.get(`https://ipinfo.io/${userIp}/json?token=2031e59ef45e2a`);
    const locationData = locationResponse.data;

    return locationData;
  } catch (error) {
    console.error('Error fetching user location:', error);
    return null;
  }
};

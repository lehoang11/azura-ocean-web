import authHeader from '../../helpers/auth-header';

export function addAccessToken(config) {
    const accessToken = authHeader();
    if (accessToken) {
      const headers = { ...config.headers, 'Authorization': accessToken };
      config.headers = headers;
    }
    return config;
  }
  
  export function onRejected(error) {
    return Promise.reject(error);
  }
  
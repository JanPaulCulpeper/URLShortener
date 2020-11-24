const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://url-shortener-teamj.herokuapp.com/'
    : 'http://localhost:3000/';
export default URL;

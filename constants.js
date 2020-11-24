const URL =
  process.env === 'production'
    ? 'https://url-shortener-teamj.herokuapp.com/'
    : 'http://localhost:3000/';
export default URL;

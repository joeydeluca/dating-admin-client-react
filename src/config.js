const local = {
  API_URL: 'http://localhost:8080/api'
};

const prod = {
  API_URL: ''
};

export default process.env.REACT_APP_STAGE === 'prod' ? prod : local;
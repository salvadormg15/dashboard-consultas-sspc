import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
//TODO: Configure app-origin cookie in qks-consultas
//axios.defaults.headers.common['App-origin'] = 'dashboard-consultas-sspc'
//TODO: Show snackbar on axios error

export default axios;
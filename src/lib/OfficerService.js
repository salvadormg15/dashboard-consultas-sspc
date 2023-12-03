import axios from './axios.js';
import { SERVICE_PATH } from '/src/resources/constants.js'

export default class OfficerService{
    constructor() {
        this.SERVICE_PATH = SERVICE_PATH;
    }


    async getOfficerById(id) {
        return axios({
            method: 'GET',
            url: `${this.SERVICE_PATH}/Officer/getOfficerById/${id}`,
        })
            .then(function(officer) {
                return officer.data;
            })
            .catch(function(error) {
                error.message = `OfficerService - getOfficerById: ${error.message}`;
                return error;
            });
    }

    async getLastAssignment(id) {
        return axios({
            method: 'GET',
            url: `${this.SERVICE_PATH}/Officer/getLastAssignment/${id}`,
        })
            .then(function(officerAssignment) {
                return officerAssignment.data;
            })
            .catch(function(error) {
                error.message = `OfficerService - getLastAssignment ${error.message}`;
                return error;
            });
    }
}
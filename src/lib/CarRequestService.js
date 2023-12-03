import axios from './axios.js'
import { SERVICE_PATH } from '/src/resources/constants.js'

export default class CarRequestService{
    constructor() {
        this.SERVICE_PATH = SERVICE_PATH;
    }


    async getCarRequest(requestId) {
        return axios({
            method: 'GET',
            url: `${this.SERVICE_PATH}/CarRequest/getCarRequest/${requestId}`,
        })
            .then(function(carRequest) {
                return carRequest.data;
            })
            .catch(function(error) {
                error.message = `CarRequestService - getCarRequest: ${error.message}`;
                return error;
            });
    }

    async fulfillRequest(requestId, carResponse){
        return axios({
            method: 'POST',
            url: `${this.SERVICE_PATH}/CarRequest/fulfillRequest/${requestId}`,
            data: JSON.stringify(carResponse)
        }).then(function(carRequest) {
                return carRequest.data;
        }).catch(function(error) {
            error.message = `CarRequestService - fulfillRequest: ${error.message}`;
            return error;
        });
    }

    async updateCarRequest(carRequest){
        return axios({
            method: 'PUT',
            url: `${this.SERVICE_PATH}/CarRequest/updateCarRequest`,
            data: carRequest
        }).then(function(carRequest) {
            return carRequest.data;
        }).catch(function(error) {
            error.message = `CarRequestService - updateRequest: ${error.message}`;
            return error;
        });
    }
}
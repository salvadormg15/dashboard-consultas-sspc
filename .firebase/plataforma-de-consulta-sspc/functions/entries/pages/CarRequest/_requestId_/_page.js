import { e as error } from "../../../../chunks/index.js";
import "../../../../chunks/axios.js";
import { S as SERVICE_PATH, O as OfficerService } from "../../../../chunks/OfficerService.js";
import axios from "axios";
class CarRequestService {
  constructor() {
    this.SERVICE_PATH = SERVICE_PATH;
  }
  async getCarRequest(requestId) {
    return axios({
      method: "GET",
      url: `${this.SERVICE_PATH}/CarRequest/getCarRequest/${requestId}`
    }).then(function(carRequest) {
      return carRequest.data;
    }).catch(function(error2) {
      error2.message = `CarRequestService - getCarRequest: ${error2.message}`;
      return error2;
    });
  }
  async fulfillRequest(requestId, carResponse) {
    return axios({
      method: "POST",
      url: `${this.SERVICE_PATH}/CarRequest/fulfillRequest/${requestId}`,
      data: JSON.stringify(carResponse)
    }).then(function(carRequest) {
      return carRequest.data;
    }).catch(function(error2) {
      error2.message = `CarRequestService - fulfillRequest: ${error2.message}`;
      return error2;
    });
  }
  async updateCarRequest(carRequest) {
    return axios({
      method: "PUT",
      url: `${this.SERVICE_PATH}/CarRequest/updateCarRequest`,
      data: carRequest
    }).then(function(carRequest2) {
      return carRequest2.data;
    }).catch(function(error2) {
      error2.message = `CarRequestService - updateRequest: ${error2.message}`;
      return error2;
    });
  }
}
const carRequestService = new CarRequestService();
async function load({ params }) {
  const { requestId } = params;
  var carRequest = await carRequestService.getCarRequest(requestId);
  if (carRequest !== null && carRequest.status === "ABIERTO") {
    var officerService = new OfficerService();
    var officer = await officerService.getOfficerById(carRequest.officer);
    var officerAssignment = await officerService.getLastAssignment(carRequest.officer);
    if (officer !== null || officerAssignment !== null) {
      return { carRequest, officer, officerAssignment };
    }
  }
  throw error(404, "La solicitud indicada no existe");
}
export {
  load
};

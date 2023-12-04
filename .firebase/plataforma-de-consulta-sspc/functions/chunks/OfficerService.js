import "./axios.js";
import axios from "axios";
const SERVICE_PATH = "https://consultas-sspc-qks-66zq5rudcq-uc.a.run.app";
class OfficerService {
  constructor() {
    this.SERVICE_PATH = SERVICE_PATH;
  }
  async getOfficerById(id) {
    return axios({
      method: "GET",
      url: `${this.SERVICE_PATH}/Officer/getOfficerById/${id}`
    }).then(function(officer) {
      return officer.data;
    }).catch(function(error) {
      error.message = `OfficerService - getOfficerById: ${error.message}`;
      return error;
    });
  }
  async getLastAssignment(id) {
    return axios({
      method: "GET",
      url: `${this.SERVICE_PATH}/Officer/getLastAssignment/${id}`
    }).then(function(officerAssignment) {
      return officerAssignment.data;
    }).catch(function(error) {
      error.message = `OfficerService - getLastAssignment ${error.message}`;
      return error;
    });
  }
  async getAll() {
    return axios({
      method: "GET",
      url: `${this.SERVICE_PATH}/Officer/getAll`
    }).then(function(officerList) {
      return officerList.data;
    }).catch(function(error) {
      error.message = `OfficerService - getAll ${error.message}`;
      return error;
    });
  }
  async createOfficer(officer) {
    return axios({
      method: "POST",
      url: `${this.SERVICE_PATH}/Officer/createOfficer`,
      data: JSON.stringify(officer)
    }).then(function(officer2) {
      return officer2.data;
    }).catch(function(error) {
      error.message = `OfficerService - createOfficer: ${error.message}`;
      return error;
    });
  }
  async updateOfficer(officer) {
    return axios({
      method: "PUT",
      url: `${this.SERVICE_PATH}/Officer/updateOfficer`,
      data: officer
    }).then(function(officer2) {
      return officer2.data;
    }).catch(function(error) {
      error.message = `OfficerService - updateOfficer: ${error.message}`;
      return error;
    });
  }
  async createOfficerAssignment(officerAssignment, officerId) {
    return axios({
      method: "POST",
      url: `${this.SERVICE_PATH}/Officer/createOfficerAssignment/${officerId}`,
      data: JSON.stringify(officerAssignment)
    }).then(function(reponse) {
      return response.data;
    }).catch(function(error) {
      error.message = `OfficerService - createOfficerAssignment: ${error.message}`;
      return error;
    });
  }
  async deleteOfficer(officerId) {
    return axios({
      method: "DELETE",
      url: `${this.SERVICE_PATH}/Officer/deleteOfficer/${officerId}`
    }).then(function(response2) {
      return response2.data;
    }).catch(function(error) {
      error.message = `OfficerService - deleteOfficer ${error.message}`;
      return error;
    });
  }
}
export {
  OfficerService as O,
  SERVICE_PATH as S
};

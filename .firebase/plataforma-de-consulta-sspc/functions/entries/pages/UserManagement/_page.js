import "../../../chunks/axios.js";
import { O as OfficerService } from "../../../chunks/OfficerService.js";
import { e as error } from "../../../chunks/index.js";
const officerService = new OfficerService();
async function load({ params }) {
  let users = await officerService.getAll();
  if (users !== null) {
    return { users };
  }
  throw error(404, "Error con el sistema, intente mas tarde.");
}
export {
  load
};

// place files you want to import through the `$lib` alias in this folder.

import { firestore } from "$lib/firebase.js";
import CarRequestService from "$lib/CarRequestService.js"
import OfficerService from "$lib/OfficerService.js";

export { firestore, CarRequestService, OfficerService };
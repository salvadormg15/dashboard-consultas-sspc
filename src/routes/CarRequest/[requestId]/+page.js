import {error, redirect} from '@sveltejs/kit';

import { CarRequestService, OfficerService } from "$lib";

const carRequestService = new CarRequestService();

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    const {requestId} = params;

    var carRequest = await carRequestService.getCarRequest(requestId);

    if(carRequest !== null){
        var officerService = new OfficerService();

        var officer = await officerService.getOfficerById(carRequest.officer);
        var officerAssignment = await officerService.getLastAssignment(carRequest.officer);

        if(officer !== null || officerAssignment !== null){
            return { carRequest, officer, officerAssignment };
        }
    }

    throw error(404, 'La solicitud indicada no existe');
}
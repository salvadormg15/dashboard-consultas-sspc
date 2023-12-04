import { OfficerService } from '$lib'
import {error} from "@sveltejs/kit";

const officerService = new OfficerService();


/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    let users = await officerService.getAll();
    if(users !== null){
        return { users };
    }

    throw error(404, 'Error con el sistema, intente mas tarde.');
}
<script>
    import { goto } from '$app/navigation'
    import { CarRequestService, OfficerService } from "$lib";

    /** @type {import('./$types').PageData} */
    export let data;
    const carRequestService = new CarRequestService();

    var carRequest = data.carRequest;
    var carRequestDetails = carRequest.carRequestDetails;
    var carResponse = carRequest.carResponse;
    var officer = data.officer;
    var officerAssignment = data.officerAssignment;

    function dateToString(firestoreTimestamp){
        let date = new Date(firestoreTimestamp.seconds*1000);
        return date.toLocaleDateString() + " " + date.toTimeString().slice(0,5);
    }

    async function fulfillRequest() {
        //TODO: MOVE TO A CONSTANT
        if(carRequest.status === 'COMPLETADA') return;

        //TODO: Set analyst
        carRequest.analyst = 'numerodenomina';
        await carRequestService.updateCarRequest(carRequest);
        // //TODO: Show completed message
        await carRequestService.fulfillRequest(carRequest.requestId, carResponse)
            .then(r => {
                console.log("Solicitud completada");
                goto('/CarRequest');
            })
            .catch((e) => console.log(e))
    }
</script>
<div class="flex flex-col items-center w-full">
    {#if carRequest.status === 'ABIERTO'}
        <div role="alert" class="alert alert-info mt-1 w-3/4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Inicio de sesión en desarrollo. Todas las solicitudes son respondidas a nombre de Miguel Mercado</span>
        </div>
    {/if}
    <div class="flex flex-row w-full justify-center mx-auto">
        <div class="flex flex-col w-1/4">
            <div class="collapse-title text-xl font-medium text-center">
                Datos del oficial
            </div>
            <div class="form-control w-full max-w-xs px-5">
                <div class="label">
                    <span class="label-text">Nombre</span>
                </div>
                <input
                    type="text"
                    class="input input-bordered w-full max-w-xs"
                    disabled
                    value="{officer.name}"
                />
                <div class="label">
                    <span class="label-text">Sector</span>
                </div>
                <input
                    type="text"
                    class="input input-bordered w-full max-w-xs"
                    disabled
                    value="{officerAssignment.sector}"
                />
                <div class="label">
                    <span class="label-text">CRP</span>
                </div>
                <input
                    type="text"
                    class="input input-bordered w-full max-w-xs"
                    disabled
                    value="{officerAssignment.crp}"
                />
            </div>

<!--            TODO: MOVE TO A CONSTANT-->
            {#if carRequest.status === 'COMPLETADA' }
                <div class="collapse-title text-xl font-medium text-center mt-5">
                    Datos del analista
                </div>
                <div class="form-control w-full max-w-xs px-5">
                    <div class="label">
                        <span class="label-text">Nombre</span>
                    </div>
                    <input
                            type="text"
                            class="input input-bordered w-full max-w-xs"
                            disabled
                            value="{officer.name}"
                    />
                    <div class="label">
                        <span class="label-text">Agrupación</span>
                    </div>
                    <input
                            type="text"
                            class="input input-bordered w-full max-w-xs"
                            disabled
                            value="{officerAssignment.group}"
                    />
                </div>
            {/if}
        </div>

        <div class="flex flex-col w-1/4">
            <div class="collapse-title text-xl font-medium text-center">
                Solicitud
            </div>
            <div class="form-control w-full max-w-xs px-5">
                <div class="label">
                    <span class="label-text">Fecha</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        value="{dateToString(carRequest.date)}"
                        disabled
                />
            </div><div class="form-control w-full max-w-xs px-5">
                <div class="label">
                    <span class="label-text">Placa</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        value="{carRequestDetails.plate}"
                        disabled
                />
            </div>
            <div class="form-control w-full max-w-xs px-5">
                <div class="label">
                    <span class="label-text">Numero de serie</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        value="{carRequestDetails.vin}"
                        disabled
                />
            </div>
            <div class="form-control w-full max-w-xs px-5">
                <div class="label">
                    <span class="label-text">Ubicación</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        value="{carRequestDetails.location}"
                        disabled
                />
            </div>
            <div class="form-control w-full max-w-xs px-5">
                <div class="label">
                    <span class="label-text">Motivo de la consulta</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        value="{carRequestDetails.reason}"
                        disabled
                />
            </div>
            <div class="form-control w-full max-w-xs px-5">
                <div class="label">
                    <span class="label-text">Narrativa</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        value="{carRequestDetails.narrative}"
                        disabled
                />
            </div>
            <div class="form-control w-full max-w-xs px-5">
                <div class="label">
                    <span class="label-text">Características</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        value="{carRequestDetails.characteristics}"
                        disabled
                />
            </div>
            <div class="form-control w-full max-w-xs px-5">
                <div class="label">
                    <span class="label-text">Nota</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        value="{carRequestDetails.note}"
                        disabled
                />
            </div>
        </div>

        <div class="flex flex-col w-1/4">
            <div class="collapse-title text-xl font-medium text-center">
                Respuesta
            </div>
            <div class="form-control w-full max-w-xs px-5">
                <div class="label">
                    <span class="label-text">Características</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        bind:value="{carResponse.characteristics}"
                />
                <div class="label">
                    <span class="label-text">Color</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        bind:value="{carResponse.color}"
                />
                <div class="label">
                    <span class="label-text">Modelo</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        bind:value="{carResponse.model}"
                />
                <div class="label">
                    <span class="label-text">Placa</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        bind:value="{carResponse.plate}"
                />
                <div class="label">
                    <span class="label-text">Terminación de número de serie</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        bind:value="{carResponse.vinTermination}"
                />
                <div class="label">
                    <span class="label-text">Número de serie del motor</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        bind:value="{carResponse.engineSerialNumber}"
                />
                <div class="label">
                    <span class="label-text">Estado</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        bind:value="{carResponse.status}"
                />
                <div class="label">
                    <span class="label-text">Nota (opcional)</span>
                </div>
                <input
                        type="text"
                        class="input input-bordered w-full max-w-xs"
                        bind:value="{carResponse.note}"
                />
            </div>
        </div>
    </div>

<!--    TODO: Move to a constant-->
    {#if carRequest.status === 'ABIERTO'}
        <div class="flex flex-row items-end pt-10">
            <button class="btn btn-success" on:click="{fulfillRequest}">Enviar Información</button>
        </div>
    {/if}

</div>

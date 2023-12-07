<script>
    import { onMount, onDestroy } from 'svelte';
    import {firestore} from "$lib";
    import { collection, query, where, onSnapshot, limit } from 'firebase/firestore';

    //Active requests
    var carRequests = [];
    var unsubscribeCarRequests;

    //All requests
    var unsubscribeAllRequests = undefined;
    var showAllRequests = false;
    var allRequestsLimit;
    var allRequests = [];
    $: {
        if(showAllRequests === true){
            subscribeToAllRequests(allRequestsLimit);
        }
    };
    // Change webhook query when limit is changed
    $: subscribeToAllRequests(allRequestsLimit);

    onMount(() => {
        const openRequestsQuery = query(collection(firestore, 'CarRequest'), where('status', '==', 'ABIERTO'));

        unsubscribeCarRequests = onSnapshot(openRequestsQuery, (querySnapshot) => {
            carRequests = [];
            querySnapshot.forEach((doc) => {
                let carRequest = doc.data();
                carRequest.requestId = doc.id;
                carRequests.push(carRequest);
            });
        });
    })

    onDestroy(() => {
        unsubscribeCarRequests && unsubscribeCarRequests();
        unsubscribeAllRequests && unsubscribeAllRequests();
    })

    function subscribeToAllRequests(queryLimit){
        //Delete previous webhooks when limit is changed
        if(unsubscribeAllRequests !== undefined){
            unsubscribeAllRequests && unsubscribeAllRequests();
        }

        console.log(queryLimit)
        const allRequestsQuery = query(collection(firestore, 'CarRequest'), limit(queryLimit));

        unsubscribeAllRequests = onSnapshot(allRequestsQuery, (querySnapshot) => {
            allRequests = [];
            querySnapshot.forEach((doc) => {
                let request = doc.data();
                request.requestId = doc.id;
                allRequests.push(request);
            });
        });
    }
    function dateToString(date){
        let readableDate = new Date(date.seconds*1000);
        return readableDate.toLocaleDateString() + " "+ readableDate.toTimeString().slice(0,5);
    }

    function getStatusBadge(status) {
        switch (status) {
            case 'COMPLETADA':
                return 'badge-success';
            case 'ABIERTO':
                return 'badge-warning';
            default:
                return 'badge-outline';
        }
    }
</script>
<h1 class="text-4xl m-2 text-center">Solicitudes en curso</h1>
<div class="flex flex-wrap justify-center">
    {#each carRequests as carRequest}
        <div class="m-4 card text-center bg-dark-blue/20">
            <div class="card-body items-center">
                <h2 class="card-title">ID Peticion: {carRequest.requestId}</h2>
                <p>Fecha: {dateToString(carRequest.date)}</p>
                <div class="badge gap-2
                            {getStatusBadge(carRequest.status)}">
                    {carRequest.status}
                </div>
                <br>
                <a class="card-actions justify-center" href="CarRequest/{carRequest.requestId}"><button class="btn btn-neutral" style="background-color: #191970;">Atender solicitud</button></a>
            </div>
        </div>
    {/each}
</div>

<!--All requests-->
<div class="form-control container mx-auto my-8">
    <label class="label flex justify-center">
        <span class="text-xl font-bold label-text mr-3">Mostrar solicitudes completadas  </span>
        <input type="checkbox" class="toggle bg-dark-blue" bind:checked="{showAllRequests}"/>
    </label>
</div>
{#if showAllRequests}
    <div class="flex flex-wrap justify-center">
        {#each allRequests as carRequest}
            <div class="m-4 card text-center bg-dark-blue/20">
                <div class="card-body items-center">
                    <h2 class="card-title">ID Peticion: {carRequest.requestId}</h2>
                    <p>Fecha: {dateToString(carRequest.date)}</p>
                    <div class="badge gap-2
                        {getStatusBadge(carRequest.status)}">
                        {carRequest.status}
                    </div>
                    <br>
                    <a class="card-actions justify-center" href="CarRequest/{carRequest.requestId}">
                        <button class="btn btn-neutral" style="background-color: #191970;">Atender solicitud</button>
                    </a>
                </div>
            </div>
        {/each}
    </div>
    <div class="flex justify-end items-center m-16">
        <span>Límite: </span>
        <select class="select select-bordered select-sm max-w-xs m-3" bind:value={allRequestsLimit}>
            <option selected value="5">5</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
    </div>
{/if}


<script>
    import { onMount, onDestroy } from 'svelte';
    import {firestore} from "$lib";
    import { collection, query, where, onSnapshot } from 'firebase/firestore';

    var carRequests = [];
    var unsubscribe;

    onMount(() => {
        const openRequestsQuery = query(collection(firestore, 'CarRequest'), where('status', '==', 'ABIERTO'));

        unsubscribe = onSnapshot(openRequestsQuery, (querySnapshot) => {
            carRequests = [];
            querySnapshot.forEach((doc) => {
                let carRequest = doc.data();
                carRequest.requestId = doc.id;
                carRequests.push(carRequest);
            });
        });
    })

    onDestroy(() => {
        unsubscribe && unsubscribe();
    })
    function dateToString(date){
        let readableDate = new Date(date.seconds*1000);
        return readableDate.toLocaleDateString() + " "+ readableDate.toTimeString().slice(0,5);
    }
</script>
<div class="text-sm breadcrumbs">
    <ul>
        {#each carRequests as carRequest}
            <li style="padding: 10px; box-sizing: border-box; max-width: 400px; text-align: center;">
                <div class="collapse collapse-plus bg-base-200" >
                    <input type="checkbox" checked/>
                    <div class="collapse-title text-xl font-medium">
                        ID Peticion: {carRequest.requestId}
                    </div>
                    <div class="collapse-content">
                        <p>Fecha: {dateToString(carRequest.date)}</p>
                        <p>Estado: {carRequest.status}</p>
                        <br>
                        <a href="CarRequest/{carRequest.requestId}"><button class="btn btn-neutral" style="background-color: #191970;">Atender solicitud</button></a>
                        <br>
                    </div>
                </div>
            </li>
        {/each}
    </ul>
</div>
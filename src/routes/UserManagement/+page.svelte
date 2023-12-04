
<script>
	import DeleteCircle from 'svelte-material-icons/DeleteCircle.svelte';
	import PencilBox from 'svelte-material-icons/PencilBox.svelte';
    import AccountCircle from 'svelte-material-icons/AccountCircle.svelte';
    import { OfficerService } from '$lib';
    import { invalidateAll } from '$app/navigation'

    let officerService = new OfficerService();

    /** @type {import('./$types').PageData} */
    export let data;

    let modalType ="";
	let users;
    $: users = data.users;

    const baseUser = {
        chatId : 0,
        chatStatus : 'Free',
        group : "",
        name : "",
        roles : {
            admin : false,
            analyst : false,
            requester : false
        },
        telegramUsername : ""
    };
    const baseAssignment = {
        assignmentId: "",
        crp: "",
        loginDate: null,
        sector: ""
    };
    var selectedUser = JSON.parse(JSON.stringify(baseUser))
    let officerAssignment = JSON.parse(JSON.stringify(baseAssignment));


    async function createUser(){
        await officerService.createOfficer(selectedUser);

        if(selectedUser.roles.requester){
            await officerService.createOfficerAssignment(officerAssignment, selectedUser.nomina);
        }
    }
    async function updateUser(){
        await officerService.updateOfficer(selectedUser);
        if(selectedUser.roles.requester){
            let lastAssignment = await officerService.getLastAssignment(selectedUser.nomina);
            if(lastAssignment === officerAssignment) return;
            officerAssignment.loginDate = null;
            await officerService.createOfficerAssignment(officerAssignment, selectedUser.nomina);
        }
        reloadPage();
    }
    async function deleteUser() {
        await officerService.deleteOfficer(selectedUser.nomina);
        reloadPage();
    }

    function openCreateModal(){
        modalType = "create";
        selectedUser = JSON.parse(JSON.stringify(baseUser));
        officerAssignment = JSON.parse(JSON.stringify(baseAssignment));
    }

    async function openEditModal(user) {
        selectedUser = JSON.parse(JSON.stringify(user));
        try{
            officerAssignment = await officerService.getLastAssignment(user.nomina);
        } catch(e) {
            officerAssignment = JSON.parse(JSON.stringify(baseAssignment));
        }
        modalType = "edit";
    }

    function openDeleteModal(user) {
        selectedUser = user;
    }

    async function reloadPage() {
        await invalidateAll()
    }
</script>

<div class="p-4 mx-auto flex flex-row items-center justify-center space-x-4">
	<h1 class="text-center text-2xl">Página de administración de usuarios</h1>
    <button class="btn btn-success" onclick="editUserModal.showModal()" on:click={() => {openCreateModal()}}>+ Agregar usuario</button>
</div>

<div class="p-4 mx-auto w-3/4">
    <h1 class="text-center text-2xl mb-4">Tabla de Usuarios</h1>
    <div class="overflow-x-auto">
      <table class="table w-full border border-solid border-blue-950">
        <thead>
          <tr>
            <th class="text-left py-2">Nombre</th>
            <th class="text-left py-2">Agrupación</th>
            <th class="text-left py-2">Telegram</th>
            <th class="text-left py-2">Administrador</th>
            <th class="text-left py-2">Analista</th>
            <th class="text-left py-2">Oficial de Campo</th>
            <th class="text-left py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {#each users as user}
            <tr>
              <td>{user.name}</td>
              <td>{user.group}</td>
              <td>{user.telegramUsername}</td>
              <td><input type="checkbox" checked="{user.roles.admin}" class="checkbox" disabled/></td>
              <td><input type="checkbox" checked="{user.roles.analyst}" class="checkbox" disabled/></td>
              <td><input type="checkbox" checked="{user.roles.requester}" class="checkbox" disabled/></td>
              <td>
                <div>
                    <button onclick="editUserModal.showModal()" on:click={() => {openEditModal(user)}} class="btn btn-warning">
                        <PencilBox />
                      </button>
                      <button onclick="deleteUserModal.showModal()" on:click={() => {openDeleteModal(user)}} class="btn btn-error">
                        <DeleteCircle />
                      </button>
                </div>
              </td>
            </tr>
          {/each}
      
        </tbody>
      </table>
    </div>

    <dialog id="deleteUserModal" class="modal">
        <div class="modal-box items-center space-y-4">
            <div class="text-center">
                <h2 class="card-title" style="color: black;">¿Desea eliminar a este usuario?</h2>

                <br><br>
                <button class="btn btn-active btn-neutral" onclick="deleteUserModal.close()">No</button>
                <button class="btn btn-active btn-primary" onclick="deleteUserModal.close()" on:click={deleteUser}>Sí</button>

            </div>
        </div>
    </dialog>


    <dialog id="editUserModal" class="modal">
        <div class="modal-box items-center space-y-4">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div class="flex flex-col text-center items-center">
                <div class="avatar">
                    <div class="text-center">
                        <AccountCircle width="70px" height="70px" />
                    </div>
                </div>
                {#if modalType === 'create'}
                    <p>Número de nómina: </p>
                    <input type="text" class="input input-bordered input-primary w-full max-w-xs bg-gray-100" bind:value="{selectedUser.nomina}"/>
                {/if}
                <p>Nombre completo: </p>
                <input type="text" class="input input-bordered input-primary w-full max-w-xs bg-gray-100" bind:value="{selectedUser.name}"/>
                <p>Agrupación</p>
                <input type="text" class="input input-bordered input-primary w-full max-w-xs bg-gray-100" bind:value="{selectedUser.group}"/>
                <p>Roles</p>
                <div>
                    <table class="table w-full">
                        <thead>
                        <tr>
                            <th class="text-left py-2">Administrador</th>
                            <th class="text-left py-2">Analista</th>
                            <th class="text-left py-2">Oficial de campo</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="flex flex-col items-center"><input type="checkbox" bind:checked="{selectedUser.roles.admin}" class="checkbox input-bordered input-primary" /></td>
                                <td><input type="checkbox" bind:checked="{selectedUser.roles.analyst}" class="checkbox input-bordered input-primary" /></td>
                                <td class="flex flex-col items-center"><input type="checkbox" bind:checked="{selectedUser.roles.requester}" class="checkbox input-bordered input-primary" /></td>
                            </tr>
                        </tbody>
                    </table>
                    {#if selectedUser.roles.requester }
                        <p>CRP</p>
                        <input type="text" class="input input-bordered input-primary w-full max-w-xs bg-gray-100" bind:value="{officerAssignment.crp}"/>
                        <p>Sector</p>
                        <input type="text" class="input input-bordered input-primary w-full max-w-xs bg-gray-100" bind:value="{officerAssignment.sector}"/>
                        <p>Usuario de Telegram</p>
                        <input type="text" placeholder="Sin @" class="input input-bordered input-primary w-full max-w-xs bg-gray-100" bind:value="{selectedUser.telegramUsername}"/>
                    {/if}
                </div>
                <br>
                <br>
                <div class="card-actions justify-center" >

                    {#if modalType === 'create'}
                        <button class="btn btn-primary" onclick="exitModal.showModal()" on:click={createUser}>Registrar</button>
                    {/if}
                    {#if modalType === 'edit'}
                        <button class="btn btn-primary" onclick="exitModal.showModal()" on:click={updateUser}>Modificar</button>
                    {/if}
                    <dialog id="exitModal" class="modal" >
                        <div class="modal-box" style="background-color: white; color: black;">

                            {#if modalType === 'create'}
                                <h3 class="font-bold text-lg">Usuario registrado</h3>
                            {/if}
                            {#if modalType === 'edit'}
                                <h3 class="font-bold text-lg">Usuario modificado</h3>
                            {/if}

                            <button class="btn btn-primary mt-5" on:click={reloadPage} onclick="exitModal.close(); editUserModal.close();">Ok</button>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    </dialog>
</div>

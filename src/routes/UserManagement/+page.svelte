
<script>
	import DeleteCircle from 'svelte-material-icons/DeleteCircle.svelte';
	import PencilBox from 'svelte-material-icons/PencilBox.svelte';
    import AccountCircle from 'svelte-material-icons/AccountCircle.svelte';
    let showComponent = false;
    let showComponent2 = false;
    let showComponent3 = false;
    let showSuccessMessage = false;
    let showSuccessMessage2 = false;
    let volver = false;
	let users = [
		{ name: 'John Doe', role: 'Developer' },
		{ name: 'Jane Smith', role: 'Designer' },
		{ name: 'Bob Johnson', role: 'Manager' }
		// Puedes añadir más usuarios a la lista
	];

    function handleDelete() {
     showSuccessMessage = true;
    }

    function handleCancel() {
     showSuccessMessage = true;
    }

    function reloadPage() {
     location.reload();
    }

    function modificar(){
        window.location.href = "/UserManagement/EditUser";
    }
    
</script>

<div class="p-4 mx-auto flex flex-row items-center justify-center space-x-4">
	<h1 class="text-center text-2xl">Página de administración de usuarios</h1>
	<button class="btn btn-success" onclick="my_modal_3.showModal()">+ Agregar usuario</button>
    <dialog id="my_modal_3" class="modal">
    <div class="modal-box items-center items-center space-y-4">
        <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div class="container">
        <div class="avatar">
            <div class="container2">
                <AccountCircle width="70px" height="70px" />
            </div>
        </div>
        <p>Nombre completo: </p>
        <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" style="background-color: #E3E3E3; color:black;" />
        <p>Contraseña: </p>
        <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" style="background-color: #E3E3E3; color:black;" />
        <p>Número de nomina: </p>
        <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" style="background-color: #E3E3E3; color:black;" />
        <p>Correo electronico: </p>
        <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" style="background-color: #E3E3E3; color:black;" />
        <p>Ocupación: </p>
        <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" style="background-color: #E3E3E3; color:black;" />
        <br>
        <br>
        <div class="card-actions justify-center" >
            
            <button class="btn btn-primary" onclick="my_modal_1.showModal()">Registrar</button>
            <dialog id="my_modal_1" class="modal" >
                <div class="modal-box" style="background-color: white; color: black;">
                  <h3 class="font-bold text-lg">Usuario registrado</h3>
                  <p class="py-4">Presiona el boton de salir</p>
                  <div class="modal-action">
                    <form method="dialog">
                      <button class="btn btn-primary" on:click={reloadPage} >Salir</button>
                    </form>
                  </div>
                </div>
              </dialog>
          </div>
        </div>
    </div>
    </dialog>
</div>

<div class="p-4 mx-auto max-w-3xl">
	<h1 class="text-center text-2xl mb-4">Tabla de Usuarios</h1>
	<div class="overflow-x-auto">
		<table class="table w-full border border-solid border-cyan-400">
			<thead>
				<tr>
					<th class="text-left py-2">Nombre</th>
					<th class="text-left py-2">Apellidos</th>
					<th class="text-left py-2">Cargo</th>
					<th class="text-left py-2">Acciones</th>
				</tr>
			</thead>
			<tbody>
				{#each users as user}
					<tr>
						<td class="py-2">{user.name}</td>
						<td class="py-2">{user.name}</td>
						<td class="py-2">{user.role}</td>
						<td class="py-2">
							<div class="flex space-x-2">
								<button class="btn btn-warning"  on:click={modificar} >
									<PencilBox />
								</button>
                                
								<button class="btn btn-error" >
									<DeleteCircle />
								</button>
                               
							</div>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>


<style>
   
    .container{
        text-align: center;
    }
    .container2{
        text-align: center;
    }

</style>

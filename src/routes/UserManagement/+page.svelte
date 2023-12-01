
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
    let showModifyModal = false;
    
	let users = [
    { name: 'John ',name2:'Doe', role: 'Developer' },
    { name: 'Jane ',name2: 'Smith' , role: 'Designer' },
    { name: 'Bob ',name2: 'Johnson', role: 'Manager' }
  ];
    let showModal = null;
    let showModal2 = null;
    let showModal3 = null;
    let selectedUser = null;

    function openEditModal(user) {
    selectedUser = user;
    showModal = 'edit';
  }

  function openDeleteModal(user) {
    selectedUser = user;
    showModal3 = 'delete';
  }

  function closeModals() {
    showModal = null;
    selectedUser = null;
  }
    
    function reloadPage() {
     location.reload();
    }

    function modificarYes(){
        showModal2 = 'listo';
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
              <td>{user.name}</td>
              <td>{user.name2}</td>
              <td>{user.role}</td>
              <td>
                <div class="flex space-x-2">
                    <button on:click={() => {
                        console.log('Edit button clicked');
                        openEditModal(user);
                      }} class="btn btn-warning">
                        <PencilBox />
                      </button>
                      <button on:click={() => {
                        console.log('Delete button clicked');
                        openDeleteModal(user);
                      }} class="btn btn-error">
                        <DeleteCircle />
                      </button>
                </div>
              </td>
            </tr>
          {/each}
      
        </tbody>
      </table>
    </div>
    {#if showModal === 'edit' }
        <div class="dark-overlay"></div>
        <div class="card w-96 bg-base-100 shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 rounded-md " >
        <div class="card-body">
            
            <div class="container">
            <div class="avatar">
                <div class="container2">
                    <AccountCircle width="70px" height="70px" />
                </div>
            </div>
            <p>Nombre</p>
            <input type="text" placeholder="{selectedUser ? selectedUser.name : 'N/A'}" class="input input-bordered input-primary w-full max-w-xs" />
            <p>Apellido</p>
            <input type="text" placeholder="{selectedUser ? selectedUser.name2 : 'N/A'}" class="input input-bordered input-primary w-full max-w-xs" />
            <p>Ocupación</p>
            <input type="text" placeholder="{selectedUser ? selectedUser.role : 'N/A'}" class="input input-bordered input-primary w-full max-w-xs" />
            <br><br>
            <button class="btn btn-active btn-neutral" on:click={reloadPage}>Cancelar</button>
            <button class="btn btn-active btn-primary" on:click={reloadPage}>Modificar</button>
            
        
        </div>
        
        </div>
        </div>
{/if}
{#if showModal3 === 'delete' }
        <div class="dark-overlay"></div>
        <div class="card w-96 bg-primary text-primary-content fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 rounded-md " >
        <div class="card-body">
    
            <div class="container">
            <h2 class="card-title" style="color: black;">¿Desea eliminar a este usuario?</h2>
            
            <br><br>
            <button class="btn btn-active btn-neutral" on:click={reloadPage}>No</button>
            <button class="btn btn-active btn-primary" on:click={reloadPage}>Sí</button>

            </div>
        
        </div>
        </div>


{/if}
<!--
        {#if showModal2 === 'listo' }
        <div class="dark-overlay"></div>
        <div class="card w-96 bg-primary text-primary-content fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 rounded-md " >
        <div class="card-body">
            
            <div class="container">
                <h2 class="card-title">Usuario modificado</h2>
                <div class="card-actions justify-end">
                  <button class="btn" on:click={reloadPage}>Salir</button>
                </div>
            </div>
            </div>
            </div>
        {/if}-->
</div>
  
  
<style>
   
    .container{
        text-align: center;
    }
    .container2{
        text-align: center;
    }
    
   .card{
    text-align: center;
    z-index: 1000;
    background-color:white;
        transition: all .5s;
    }
    .dark-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3); 
        z-index: 999;
}
    input::placeholder {
    color: black; 
    }
    
</style>

<script>
    let selectedOption;
    let showComponent = false;
    let showSuccessMessage = false;
    let showSuccessMessage2 = false;
    let volver = false;
    import { goto } from '$app/navigation';
    function handleOptionChange() {
     
        showComponent = true;
      
    }
    function handleDelete() {
        showSuccessMessage = true;
    
    }

    function handleCancel() {
    
        showSuccessMessage = true;
    }

    function reloadPage() {
    
    location.reload();
  }
 
  </script>

  
        <div class="card w-96 bg-neutral text-neutral-content" style="background-color: white; color: black;">
            <div class="card-body items-center text-center">
    
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
             
              <div class="card-actions justify-end" >
                <button class="btn btn-primary" onclick="my_modal_1.showModal()">Modificar</button>
                <button class="btn btn-accent" on:click={reloadPage}>Cancelar</button>
                
                <dialog id="my_modal_1" class="modal" >
                    <div class="modal-box" style="background-color: white; color: black;">
                      <h3 class="font-bold text-lg">Usuario modificado</h3>
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
        

   

      
     
      

  
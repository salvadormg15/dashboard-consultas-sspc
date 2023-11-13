<script>
    function cambioColor(){
        this.style.background = "#000000";
        this.style.color = "white";
    }
    function regresoColor(){
        this.style.background = "#F2F2F2";
        this.style.color = "black";
    }
</script>


<ul>
    <li style="padding: 20px;">
        <div class="collapse bg-base-200" >
            <input type="checkbox" /> 
            <div class="collapse-title text-xl font-medium">
                ID Peticion: 12345
            </div>
            <div class="collapse-content"> 
                <p>Zona: Centro</p>
                <p>Estado: Pendiente</p>
                <a href="UserManagement"><button style="border-radius: 5px; border: 1px solid black;">  Entrar  </button></a>
            </div>
        </div>
    </li>
    <li style="padding: 20px;">
        <div class="collapse bg-base-200">
            <input type="checkbox" /> 
            <div class="collapse-title text-xl font-medium">
                ID Peticion: 12344
            </div>
            <div class="collapse-content"> 
                <p>Zona: Sur</p>
                <p>Estado: Pendiente</p>
                <a href="UserManagement"><button style="border-radius: 5px; border: 1px solid black;">  Entrar  </button></a>
            </div>
        </div>
    </li>
    <li style="padding: 20px;">
        <div class="collapse bg-base-200">
            <input type="checkbox" /> 
            <div class="collapse-title text-xl font-medium">
                ID Peticion: 12343
            </div>
            <div class="collapse-content"> 
                <p>Zona: Centro</p>
                <p>Estado: Pendiente</p>
                <a href="UserManagement"><button style="border-radius: 5px; border: 1px solid black;">  Entrar  </button></a>
            </div>
        </div>
    </li>
    <li style="padding: 20px;">
        <div class="collapse bg-base-200">
            <input type="checkbox" /> 
            <div class="collapse-title text-xl font-medium">
                ID Peticion: 12342
            </div>
            <div class="collapse-content"> 
                <p>Zona: Este</p>
                <p>Estado: Completada</p>
                <a href="UserManagement"><button style="border-radius: 5px; border: 1px solid black;">  Entrar  </button></a>
            </div>
        </div>
    </li>
</ul>
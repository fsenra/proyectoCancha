//Modal Reservas

const abrirModal = document.querySelector("#abrir_modal_reservas");
const cerrarModal = document.querySelector("#cerrar_modal_reservas");
const modal = document.querySelector("#modal_reservas");

abrirModal.addEventListener("click", ()=>{
    modal.showModal();
})

cerrarModal.addEventListener("click",()=>{
    modal.close()
})
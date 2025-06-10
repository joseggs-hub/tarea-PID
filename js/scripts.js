 // Funciones del editor de texto rico
 function execCommand(command, value = null) {
    document.execCommand(command, false, value);
    document.getElementById('description').focus();
  }

  // Validaciones y acciones de los botones
  function validateForm() {
    const denomination = document.getElementById('denomination').value;
    const startDate = document.getElementById('startDate').value;
    if (!denomination.trim()) {
      alert('El campo Denominación es obligatorio');
      return false;
    }
    if (!startDate) {
      alert('La Fecha inicio es obligatoria');
      return false;
    }
    return true;
  }
  function applyForm() {
    if (validateForm()) {
      alert('Aplicar: Los datos se han guardado (simulado).');
    }
  }
  function acceptForm() {
    if (validateForm()) {
      alert('Aceptar: Los datos se han guardado (simulado).');
      bootstrap.Modal.getInstance(document.getElementById('addCategoryModal')).hide();
    }
  }
  function acceptAndNew() {
    if (validateForm()) {
      alert('Aceptar y Nuevo: Los datos se han guardado (simulado).');
      document.getElementById('categoryForm').reset();
      document.getElementById('description').innerHTML = '';
    }
  }
  function acceptAndClose() {
    acceptForm();
}
  
document.getElementById('fullscreenToggle').addEventListener('click', function() {
  const modalDialog = document.getElementById('modalDialog');
  const icon = this.querySelector('i');

  modalDialog.classList.toggle('modal-fullscreen');

  // Cambiar icono según estado
  if (modalDialog.classList.contains('modal-fullscreen')) {
    icon.classList.remove('fa-expand');
    icon.classList.add('fa-compress');
    this.title = "Salir de pantalla completa";
  } else {
    icon.classList.remove('fa-compress');
    icon.classList.add('fa-expand');
    this.title = "Pantalla completa";
  }
});

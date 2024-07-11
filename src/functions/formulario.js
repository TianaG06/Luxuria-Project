document.addEventListener("DOMContentLoaded", () => {
    const checkoutForm = document.getElementById("checkoutForm");
    const nombreCompleto = document.querySelector("#nombre");
    const telefonoInput = checkoutForm.querySelector("#telefono");
    const direccionInput = checkoutForm.querySelector("#direccion");
    const emailInput = checkoutForm.querySelector("#email");
    const nombreTarjetaInput = checkoutForm.querySelector("#card-name");
    const numeroTarjetaInput = checkoutForm.querySelector("#card-number");
    const expiryDateInput = checkoutForm.querySelector("#expiration-date");
    const numeroCvv = checkoutForm.querySelector("#cvv");
    const submitButton = checkoutForm.querySelector("button[type='submit']");
  
    submitButton.disabled = true;
    checkoutForm.addEventListener("input", () => {
      if (validateForm(checkoutForm)) {
        submitButton.disabled = false;
      } else {
        submitButton = true;
      }
    });
})
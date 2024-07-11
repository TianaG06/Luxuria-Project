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
  
    // Deshabilitar el botón de submit inicialmente
    submitButton.disabled = true;
  
    const validateForm = () => {
      const validations = [
        validateNotEmpty(nombreCompleto),
        validatePhone(telefonoInput),
        validateNotEmpty(direccionInput),
        validateEmail(emailInput),
        validateNotEmpty(nombreTarjetaInput),
        validateCardNumber(numeroTarjetaInput),
        validateExpiryDate(expiryDateInput),
        validateCVV(numeroCvv)
      ];
  
      return validations.every(validation => validation === true);
    };
  
    const validateNotEmpty = (input) => {
      if (input.value.trim() === "") {
        input.classList.add("error");
        return false;
      } else {
        input.classList.remove("error");
        return true;
      }
    };
  
    const validatePhone = (input) => {
      const phonePattern = /^[0-9]{10}$/; // Ejemplo para número de teléfono de 10 dígitos
      if (!phonePattern.test(input.value)) {
        input.classList.add("error");
        return false;
      } else {
        input.classList.remove("error");
        return true;
      }
    };
  
    const validateEmail = (input) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(input.value)) {
        input.classList.add("error");
        return false;
      } else {
        input.classList.remove("error");
        return true;
      }
    };
  
    const validateCardNumber = (input) => {
      const cardPattern = /^[0-9]{16}$/; // Ejemplo para número de tarjeta de 16 dígitos
      if (!cardPattern.test(input.value)) {
        input.classList.add("error");
        return false;
      } else {
        input.classList.remove("error");
        return true;
      }
    };
  
    const validateExpiryDate = (input) => {
      const expiryPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
      if (!expiryPattern.test(input.value)) {
        input.classList.add("error");
        return false;
      } else {
        input.classList.remove("error");
        return true;
      }
    };
  
    const validateCVV = (input) => {
      const cvvPattern = /^[0-9]{3,4}$/; // Ejemplo para CVV de 3 o 4 dígitos
      if (!cvvPattern.test(input.value)) {
        input.classList.add("error");
        return false;
      } else {
        input.classList.remove("error");
        return true;
      }
    };
  
    // Evento para validar el formulario en cada input
    checkoutForm.addEventListener("input", () => {
      submitButton.disabled = !validateForm();
    });
  
    // Evento para el submit del formulario
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        const formData = {
          nombre: nombreCompleto.value,
          telefono: telefonoInput.value,
          direccion: direccionInput.value,
          email: emailInput.value,
          nombreTarjeta: nombreTarjetaInput.value,
          numeroTarjeta: numeroTarjetaInput.value,
          fechaCaducidad: expiryDateInput.value,
          cvv: numeroCvv.value,
          fecha: new Date().toLocaleDateString()
        };
        localStorage.setItem("formData", JSON.stringify(formData));
        window.location.href = "./checkoutPaymentSucess.html";
      }
    });
  
    // Normalizar la entrada de datos de los campos de teléfono y tarjeta de crédito
    telefonoInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "");
    });
  
    numeroTarjetaInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "");
    });
  
    expiryDateInput.addEventListener("input", (e) => {
      let value = e.target.value;
      if (!/^\d{0,2}(\/\d{0,2})?$/.test(value)) {
        value = value.replace(/[^0-9\/]/g, "");
      }
      if (value.length === 2 && !value.includes("/")) {
        value += "/";
      }
      e.target.value = value;
    });
  });
  
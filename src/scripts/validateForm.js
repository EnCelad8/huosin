export function setupFormValidation() {
  const forms = document.querySelectorAll(
    '.connect-us__form, .hero-contacts__form',
  );

  const dataForm = '[data-js-form]';
  const dataFieldsErrors = '[data-js-form-errors]';

  document.addEventListener('blur', onBlur, { capture: true });
  document.addEventListener('change', onChange);
  document.addEventListener('submit', onSubmit);

  const errorMessages = {
    valueMissing: () => 'Пожалуйста, заполните это поле',
    patternMismatch: () => 'Данные не соответствуют требуемому формату',
    tooShort: ({ minLength }) =>
      `Введено слишком мало символов (минимум ${minLength})`,
    tooLong: ({ maxLength }) =>
      `Введено слишком много символов (максимум ${maxLength})`,
  };

  function manageErrors(fieldElement, messages) {
    const fieldErrorsElement =
      fieldElement.parentElement.querySelector(dataFieldsErrors);

    fieldErrorsElement.innerHTML = messages
      .map((msg) => `<span class="connect-us__error">${msg}</span>`)
      .join('  ');
  }

  function validateField(fieldElement) {
    const errors = fieldElement.validity;
    const messages = [];

    Object.entries(errorMessages).forEach(([key, getMessage]) => {
      if (errors[key]) {
        messages.push(getMessage(fieldElement));
      }
    });

    manageErrors(fieldElement, messages);

    const isValid = messages.length === 0;

    fieldElement.ariaInvalid = !isValid;

    console.log(messages);
    return isValid;
  }

  function onBlur(event) {
    const { target } = event;
    // console.log(target);

    const isFormField = target.closest(dataForm);
    const isRequired = target.required;

    if (isFormField && isRequired) {
      validateField(target);
    }
  }

  function onChange(event) {
    const { target } = event;

    const isRequired = target.required;

    if (isRequired) {
      validateField(target);
    }
  }

  function onSubmit(event) {
    // event.preventDefault();
    const isFormElement = event.target.matches(dataForm);

    if (!isFormElement) {
      return;
    }
    const requiredElements = [...event.target.elements].filter(
      (el) => el.required,
    );
    console.log(requiredElements);

    let invalidElement = null;
    let isFormValid = true;
    requiredElements.forEach((el) => {
      const isFieldValid = validateField(el);

      if (!isFieldValid) {
        isFormValid = false;

        if (!invalidElement) {
          invalidElement = el;
        }
      }
    });
    // const isFormValid = requiredElements.every((el) => {
    //   const isValid = validateField(el);

    //   if (!isValid && !invalidElement) {
    //     invalidElement = el;
    //   }

    //   return isValid;
    // });

    if (!isFormValid) {
      event.preventDefault();
      invalidElement.focus();
    }
  }

  // forms.forEach((form) => {
  //   form.addEventListener('submit', function (e) {
  //     e.preventDefault();

  //     const phoneInput = form.querySelector('#phone');
  //     const emailInput = form.querySelector('#email');
  //     const nameInput = form.querySelector('#name');

  //     let isValid = true;

  //     [phoneInput, emailInput, nameInput].forEach((input) => {
  //       if (input) input.style.borderColor = '';
  //     });

  //     const phonePattern = /^[\+]?[0-9\s\(\)-]{7,20}$/;
  //     if (phoneInput && !phonePattern.test(phoneInput.value.trim())) {
  //       phoneInput.style.borderColor = 'red';
  //       isValid = false;
  //     }

  //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (emailInput && !emailPattern.test(emailInput.value.trim())) {
  //       emailInput.style.borderColor = 'red';
  //       isValid = false;
  //     }

  //     const namePattern = /^[а-яА-Яa-zA-ZёЁ\s-]{2,}$/;
  //     if (nameInput && !namePattern.test(nameInput.value.trim())) {
  //       nameInput.style.borderColor = 'red';
  //       isValid = false;
  //     }

  //     if (isValid) {
  //       console.log('Форма успешно отправлена:', form);
  //       form.reset();
  //     } else {
  //       console.log('Проверьте корректность данных в форме:', form);
  //     }
  //   });
  // });
}

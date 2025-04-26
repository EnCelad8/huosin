import '../styles/main.scss';
import './burgerButton';
import './Swiper';

import { setupFormValidation } from './validateForm.js';

document.addEventListener('DOMContentLoaded', () => {
  setupFormValidation();
});

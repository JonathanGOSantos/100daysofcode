const accordions = document.querySelectorAll('.c-faq__accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    const isActive = document.querySelector('.c-faq__accordion.isActive');
    if (accordion === isActive) {
      const buttonIcon = accordion.querySelector('img');
      buttonIcon.src = 'assets/images/icon-plus.svg';
      isActive.classList.remove('isActive');
      return;
    }

    if (isActive) {
      const buttonIcon = isActive.querySelector('img');
      buttonIcon.src = 'assets/images/icon-plus.svg';
      isActive.classList.remove('isActive');
    }

    accordion.classList.toggle('isActive');
    const buttonIcon = accordion.querySelector('img');
    buttonIcon.src = 'assets/images/icon-minus.svg';
  });
});

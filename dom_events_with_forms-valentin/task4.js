  document.body.addEventListener('focusin', (event) => {
    if (event.target.tagName === 'INPUT') {
      event.target.classList.add('focused');
    }
  });

  document.body.addEventListener('focusout', (event) => {
    if (event.target.tagName === 'INPUT') {
      event.target.classList.remove('focused');
    }
  });

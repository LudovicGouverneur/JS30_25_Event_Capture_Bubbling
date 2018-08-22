
  const divs = document.querySelectorAll('div');
  divs.forEach(div => div.addEventListener('click', logText, {
    capture: true,
    once: true,
  }));
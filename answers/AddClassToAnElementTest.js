const addClass = (selector, className) => {
    const elm = document.querySelector(selector);
    if (elm) {
      elm.classList.add(className);
    }
  }
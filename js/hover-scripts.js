(function () {
  const link = document.querySelectorAll('nav > .hover-this');
  const cursor = document.querySelector('.cursor');

  const animateit = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = this;
    const move = 25;
    const xMove = x / width * (move * 2) - move;
    const yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
  };

  const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    // Determine background color of the element under the cursor
    const elementUnderCursor = document.elementFromPoint(x, y);
    const backgroundColor = getComputedStyle(elementUnderCursor).backgroundColor;
    const textColor = getComputedStyle(elementUnderCursor).color;

    // Check if the cursor is over black text on a white background
    if (isBlackTextOnWhiteBackground(textColor, backgroundColor)) {
      cursor.classList.add('transparent');
    } else {
      cursor.classList.remove('transparent');
    }
  };

  // Function to check if the cursor is over black text on a white background
  const isBlackTextOnWhiteBackground = function (textColor, backgroundColor) {
    return textColor === 'rgb(0, 0, 0)' && backgroundColor === 'rgb(255, 255, 255)';
  };

  link.forEach(b => b.addEventListener('mousemove', animateit));
  link.forEach(b => b.addEventListener('mouseleave', animateit));
  window.addEventListener('mousemove', editCursor);
})();

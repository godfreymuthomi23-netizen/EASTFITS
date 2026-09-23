const tabs = document.querySelectorAll('.tab');
const planItems = document.querySelectorAll('.plan-item');
const primaryBtn = document.querySelector('.primary');
const menuBtn = document.querySelector('.menu-btn');

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
  });
}

for (const item of planItems) {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
    const marker = item.querySelector('span');
    if (marker) {
      marker.textContent = item.classList.contains('checked') ? '✓' : '•';
    }
  });
}

primaryBtn?.addEventListener('click', () => {
  const button = primaryBtn;
  button.textContent = 'Plan started';
  button.disabled = true;
  button.style.opacity = '0.8';
});

menuBtn?.addEventListener('click', () => {
  alert('Menu opened');
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.place-card');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const selected = button.dataset.filter;
  cards.forEach(card => {
    card.hidden = selected !== 'all' && card.dataset.category !== selected;
  });
}));

document.querySelectorAll('.save').forEach(button => button.addEventListener('click', () => {
  const saved = button.getAttribute('aria-pressed') !== 'true';
  button.setAttribute('aria-pressed', String(saved));
  button.textContent = saved ? '♥' : '♡';
  const title = button.closest('.place-card').querySelector('h3').textContent;
  const note = document.querySelector('.save-note');
  note.textContent = saved
    ? `已收藏：${title}。 / 저장됨: ${title}.`
    : `已取消收藏：${title}。 / 저장 취소: ${title}.`;
}));
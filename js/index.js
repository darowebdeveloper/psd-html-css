import '../styles/main.scss';

document.querySelector('.video__play-button').addEventListener('click', (e) => {
  e.preventDefault();
  e.target.style.display = 'none';
  document.querySelector('.video__content').play();
});

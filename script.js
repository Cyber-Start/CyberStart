'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('quiz').addEventListener('submit', function (event) {
  event.preventDefault();
  const answer = new FormData(this).get('answer');
  document.getElementById('feedback').textContent = answer === 'availability'
    ? 'Correct! Availability means people can access systems and information when needed. Next, think about how backups could help restore access.'
    : 'Try again. Privacy relates to confidentiality and accurate records relate to integrity. Which goal describes being able to access the portal?';
});

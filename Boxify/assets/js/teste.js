function rotateCard() {
  var card = document.querySelector('.card');
  card.classList.toggle('flip');

  var registerSection = document.getElementById('registerSection');
  setTimeout(function() {
    registerSection.scrollIntoView();
  }, 500);

  var registerAnchor = document.getElementById('registerAnchor');
  var loginBtnContainer = document.getElementById('loginBtnContainer');

  if (card.classList.contains('flip')) {
    registerAnchor.style.display = 'none';
    loginBtnContainer.style.display = 'none';
  } else {
    registerAnchor.style.display = 'block';
    loginBtnContainer.style.display = 'block';
  }
}

function backToLogin() {
  var card = document.querySelector('.card');
  card.classList.remove('flip');

  var loginSection = document.getElementById('loginSection');
  loginSection.scrollIntoView();

  var registerAnchor = document.getElementById('registerAnchor');
  var loginBtnContainer = document.getElementById('loginBtnContainer');

  registerAnchor.style.display = 'block';
  loginBtnContainer.style.display = 'block';
}

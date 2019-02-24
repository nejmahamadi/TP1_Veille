var log = document.querySelector('.log');

var myObject = {
  one: 0, 
  two: 4000
}

var myAnimation = anime({
  targets: myObject,
  one: 9999,
  two: 4200,
  duration: 5000,
  round: true,
  easing: 'linear',
  loop: true,
  update: function() {
    log.innerHTML = JSON.stringify(myObject);
  }
});
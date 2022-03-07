console.log('tap.js working.')

AFRAME.registerComponent('cursor-listener', {
  init: function () {

    var targetEl = document.querySelector('#cylinder');
    targetEl.addEventListener('click', function() {
        targetEl.setAttribute('animation', {to: '0 -360 0'});
        console.log('I was clicked.');
    });

    // var COLORS = ['red', 'green', 'blue'];
    // this.el.addEventListener('click', function (evt) {
    //   var randomIndex = Math.floor(Math.random() * COLORS.length);
    //   this.setAttribute('material', 'color', COLORS[randomIndex]);
    //   console.log('I was clicked at: ', evt.detail.intersection.point);
    // });
  }
});
/*
u(t) is called 60 times per second.
t: Elapsed time in seconds.
S: Shorthand for Math.sin.
C: Shorthand for Math.cos.
T: Shorthand for Math.tan.
R: Function that generates rgba-strings, usage ex.: R(255, 255, 255, 0.5)
c: A 1920x1080 canvas.
x: A 2D context for that canvas.
*/

var c = document.querySelector("#canvas");
c.width = 1920;
c.height = 1080;
var S = Math.sin;
var C = Math.cos;
var T = Math.tan;
var R = function(r, g, b, a) {
  a = a === undefined ? 1 : a;
  return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a + ")";
};
var x = c.getContext("2d");
var startT = +new Date();



function loop() {
  requestAnimationFrame(loop);
  u((new Date() - startT) / 1000);
};
loop();

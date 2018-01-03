r=[50,2,4,5,4,23,18,12,11]
var x = 0;
while(x<100) {
  var fucked = false;
  for(var i = 0; i < 9; i++) {
    var R=50*Math.cos(i**x)**2;
    if(Math.abs(R-r[i]) > 10) {
      console.log(i);
      fucked = true;
    }
  }
  if(!fucked)
    console.log(x);
  x+=0.001;
}
console.log('unlucky m8');

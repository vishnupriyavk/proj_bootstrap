$('#counter0').click(function() {
    $('.count0').html(function(i, val) { return val*1+1 });
    Materialize.toast('You have clicked me!', 2000)
});
$('#counter1').click(function() {
    $('.count1').html(function(i, val) { return val*1+1 });
    Materialize.toast('You have clicked me!', 2000)
});
$('#counter2').click(function() {
    $('.count2').html(function(i, val) { return val*1+1 });
    Materialize.toast('You have clicked me!', 2000)
});


$('#counter3').click(function() {
    $('.count3').html(function(i, val) { return val*1+1 });
    Materialize.toast('You have clicked me!', 2000)
});

$('#counter4').click(function() {
    $('.count4').html(function(i, val) { return val*1+1 });
    Materialize.toast('You have clicked me!', 2000)
});

function myFunction() {

  var myobj = document.getElementById("temple");
  var myobj1 = document.getElementById("goa");

  if(myobj){
  myobj.remove();}
  else{
  myobj1.remove();}

}

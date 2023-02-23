let ride = 200;
let city = 'NYC';
tip = 'generous';

function scuberGreetingForFeet(ride){
  // Write your code here!
  let message;
if (ride > 2500) {
  return message = "No can do.";
} else if (ride > 2000) {
  return message = "I will gladly take your thirty bucks."
}
else if (ride > 400) {
  return message = "That will be twenty bucks."
}
else if (ride <= 400) {
  return message = "This one is on me!"
}
}

function ternaryCheckCity(city){
  // Write your code here!
  let messageCity;
  return messageCity = city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let messageTip;
  if (tip === 'generous') {
  return messageTip = "Thank you so much.";
  }
  else if (tip === 'not as generous'){
    return messageTip = "Thank you.";
}
  else if (tip === 'thanks for everything'){
  return messageTip = "Bye.";
}
}

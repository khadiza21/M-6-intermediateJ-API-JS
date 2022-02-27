function welcomeMessage(name, greetHandler) {
  console.log(greetHandler);
  greetHandler();
  greetHandler(name);
}

function greetMorning(name) {
  console.log("Good Morning", name);
}
function greetNight(name) {
  console.log("Good Morning", name);
}

welcomeMessage("bk", greetMorning);
welcomeMessage("khadiza", greetNight);

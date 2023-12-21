
const storeState = () => {
  let currentState = {soil:0, water:0, light:0, id:determineUniqueId()};
  return (stateChangeFunction = (state) => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const def = changeState("def")(1);
const att = changeState("att")(1);
const dex = changeState("dex")(1);
const hp = changeState("hp")(1);


window.onload = function () {
  document.getElementById("feed").onclick = function () {
    const newState = stateControl(feed);
    document.getElementById("soil-value").innerText = `Soil: ${newState.soil}`;
  };

  document.getElementById("water").onclick = function () {
    const newState = stateControl(hydrate);
    document.getElementById(
      "water-value"
    ).innerText = `Water: ${newState.water}`;
  };

  document.getElementById("light").onclick = function () {
    const newState = stateControl(light);
    document.getElementById(
      "light-value"
    ).innerText = `Light: ${newState.light}`;
  };

  document.getElementById("show-state").onclick = function () {
    const currentState = stateControl();
    document.getElementById(
      "soil-value"
    ).innerText = `Your Soil = ${currentState.soil}`;

    document.getElementById(
      "water-value"
    ).innerText = `Your Water = ${currentState.water}`;

    document.getElementById(
      "light-value"
    ).innerText = `Your Light = ${currentState.light}`;

  };
};


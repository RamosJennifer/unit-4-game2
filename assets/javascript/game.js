var crystals = ["crystalOne","crystalTwo","crystalThree","crystalFour"];

for (var i=0;i<crystals.length;i++){
    crystals[i] = (Math.floor((Math.random()*12)+1));
    console.log(crystals[i]);
    $("#crystalValues").append("<div>" + crystals[i]);
}
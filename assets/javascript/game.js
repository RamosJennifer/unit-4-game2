var crystals = ["crystalOne","crystalTwo","crystalThree","crystalFour"];

for (var i=0;i<crystals.length;i++){
    // div with individual classes
    var crystalValues = $("<div>");
    crystalValues.attr("id",crystals[i]);
    console.log(crystals[i]);
    $("#crystalValues").append(crystalValues);
    // adding the randomized number inside the div created above
    crystals[i] = (Math.floor((Math.random()*12)+1));
    console.log(crystals[i]);
    $(crystalValues).append(crystals[i]);
}
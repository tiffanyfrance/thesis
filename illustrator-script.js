
if (app.documents.length > 0) {

  // parse data for final array of 7 emotions (or however many exist)
  // import data
  // include only values above 1%
  // replace ramppoint with percentages
  // import script for gradient with book name
  // new document 
  // create shape (with bleed) and add gradient to shape
  // set gradient angle -60 (script?)
  // add text and author (script?)
  // add page num bar at bottom

  var vals = [
    { emotion: "analytical", score: 0.10365063537107432, colors: [100,54,143] },
    { emotion: "sadness", score: 0.24080351121249116, colors: [0,180,191] },
    { emotion: "fear", score: 0.1083354660555674, colors: [111,200,116] },
    // { emotion: "confident", score: 0, colors: [215,228,137] },
    { emotion: "joy", score: 0.32475324551220797, colors: [248,236,45] },
    { emotion: "tentative", score: 0.11830067944680238, colors: [239, 103, 60] },
    { emotion: "anger", score: 0.104156462401856, colors: [235,60,57] }
  ];

  // Create a new gradient
  // A new gradient always has 2 stops
  var newGradient = app.activeDocument.gradients.add();
  newGradient.name = "NewGradient";
  newGradient.type = GradientType.LINEAR;

  for (var st = 2; st < vals.length; st++) {
    newGradient.gradientStops.add();
  }

  var currentRamp = 0;

  // apply data to the virtual gradient
  for (var a = 0; a < vals.length; a++) {
    var color = new RGBColor();
    color.red = vals[a].colors[0];
    color.green = vals[a].colors[1];
    color.blue = vals[a].colors[2];

    currentRamp += (vals[a].score * 100);

    newGradient.gradientStops[a].rampPoint = currentRamp;
    newGradient.gradientStops[a].color = color;
  }

  // construct an Illustrator.GradientColor object referring to the newly created gradient
  var colorOfGradient = new GradientColor();
  colorOfGradient.gradient = newGradient;


  // get first path item, apply new gradient as its fill
  var topPath = app.activeDocument.pathItems[0];
  topPath.filled = true;
  topPath.fillColor = colorOfGradient;
}

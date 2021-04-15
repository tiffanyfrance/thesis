
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

  // let data = [
  //   10.36,
  //   24.08,
  //   10.83,
  //   0,
  //   32.47,
  //   11.83,
  //   10.41
  // ]

  let vals = [
    { emotion: "analytical", score: 0.10365063537107432 },
    { emotion: "sadness", score: 0.24080351121249116 },
    { emotion: "fear", score: 0.1083354660555674 },
    { emotion: "joy", score: 0.32475324551220797 },
    { emotion: "tentative", score: 0.11830067944680238 },
    { emotion: "anger", score: 0.104156462401856 }
  ];

  // Create a color for both ends of the gradient
  [100,54,143]

  var _sadness = new RGBColor(); //lightblue
  _sadness.red = 0;
  _sadness.green = 180;
  _sadness.blue = 191;

  var _fear = new RGBColor(); //dark green
  _fear.red = 181;
  _fear.green = 220;
  _fear.blue = 183;

  var _confident = new RGBColor(); //yellow green
  _confident.red = 215;
  _confident.green = 228;
  _confident.blue = 137;

  var _joy = new RGBColor(); //yellow
  _joy.red = 248;
  _joy.green = 236;
  _joy.blue = 45;

  var _tentative = new RGBColor(); //orange
  _tentative.red = 239;
  _tentative.green = 103;
  _tentative.blue = 60;

  var _anger = new RGBColor(); //red
  _anger.red = 235;
  _anger.green = 60;
  _anger.blue = 57;

  // Create a new gradient
  // A new gradient always has 2 stops
  var newGradient = app.activeDocument.gradients.add();
  newGradient.name = "NewGradient";
  newGradient.type = GradientType.LINEAR;

  for (var st = 2; st < vals.length; st++) {
    newGradient.gradientStops.add();
  }

  // apply data to the virtual gradient
  for (var a = 0; a < vals.length; a++) {
    let color = new RGBColor();
    color.red = vals[a].color[0];
    color.red = vals[a].color[1];
    color.red = vals[a].color[2];

    if (vals[a].score > 0) {
      newGradient.gradientStops[a].rampPoint = vals[a].score;
      newGradient.gradientStops[a].color = color;
    }
  }

  // // Modify the first gradient stop
  // newGradient.gradientStops[0].rampPoint = 20;
  // // newGradient.gradientStops[0].midPoint = 60;
  // newGradient.gradientStops[0].color = _analytical;

  // newGradient.gradientStops[1].rampPoint = 40;
  // newGradient.gradientStops[1].color = _fear;

  // newGradient.gradientStops[2].rampPoint = 60;
  // newGradient.gradientStops[2].color = _joy;

  // newGradient.gradientStops[3].rampPoint = 80;
  // newGradient.gradientStops[3].color = _tentative;

  // // Modify the last gradient stop
  // newGradient.gradientStops[4].rampPoint = 90;
  // newGradient.gradientStops[4].color = _anger;

  // construct an Illustrator.GradientColor object referring to the newly created gradient
  var colorOfGradient = new GradientColor();
  colorOfGradient.gradient = newGradient;


  // get first path item, apply new gradient as its fill
  var topPath = app.activeDocument.pathItems[0];
  topPath.filled = true;
  topPath.fillColor = colorOfGradient;
}

let chapLevel = [
  {
    "chapter": "chapter 1",
    "document_tone": {
      "tones": [
        {
          "score": 0.552241,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        },
        {
          "score": 0.561087,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.518802,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        },
        {
          "score": 0.605262,
          "tone_id": "tentative",
          "tone_name": "Tentative"
        }
      ]
    },
  },
  {
    "chapter": "chapter 2",
    "document_tone": {
      "tones": [
        {
          "score": 0.561228,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.571807,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        }
      ]
    },
  },
  {
    "chapter": "chapter 3",
    "document_tone": {
      "tones": [
        {
          "score": 0.527433,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.611308,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        }
      ]
    },
  },
  {
    "chapter": "chapter 4",
    "document_tone": {
      "tones": [
        {
          "score": 0.577691,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.552638,
          "tone_id": "fear",
          "tone_name": "Fear"
        },
        {
          "score": 0.654408,
          "tone_id": "tentative",
          "tone_name": "Tentative"
        }
      ]
    },
  },
  {
    "chapter": "chapter 5",
    "document_tone": {
      "tones": [
        {
          "score": 0.537589,
          "tone_id": "anger",
          "tone_name": "Anger"
        },
        {
          "score": 0.500972,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.540797,
          "tone_id": "fear",
          "tone_name": "Fear"
        },
        {
          "score": 0.546773,
          "tone_id": "tentative",
          "tone_name": "Tentative"
        }
      ]
    },
  },
  {
    "chapter": "chapter 6",
    "document_tone": {
      "tones": [
        {
          "score": 0.515031,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.57624,
          "tone_id": "fear",
          "tone_name": "Fear"
        },
        {
          "score": 0.602746,
          "tone_id": "anger",
          "tone_name": "Anger"
        },
        {
          "score": 0.667027,
          "tone_id": "tentative",
          "tone_name": "Tentative"
        }
      ]
    },
  },
  {
    "chapter": "chapter 7",
    "document_tone": {
      "tones": [
        {
          "score": 0.555284,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        },
        {
          "score": 0.581233,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.62344,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        }
      ]
    },
  },
  {
    "chapter": "chapter 8",
    "document_tone": {
      "tones": [
        {
          "score": 0.505004,
          "tone_id": "anger",
          "tone_name": "Anger"
        },
        {
          "score": 0.600152,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.506581,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        }
      ]
    },
  },
  {
    "chapter": "chapter 9",
    "document_tone": {
      "tones": [
        {
          "score": 0.564431,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.529191,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        },
        {
          "score": 0.502939,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        }
      ]
    },
  },
  {
    "chapter": "chapter 10",
    "document_tone": {
      "tones": [
        {
          "score": 0.637561,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.585734,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        }
      ]
    },
  },
  {
    "chapter": "chapter 11",
    "document_tone": {
      "tones": [
        {
          "score": 0.532399,
          "tone_id": "anger",
          "tone_name": "Anger"
        },
        {
          "score": 0.576009,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.567795,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        },
        {
          "score": 0.595439,
          "tone_id": "fear",
          "tone_name": "Fear"
        },
        {
          "score": 0.521981,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        }
      ]
    },
  },
  {
    "chapter": "chapter 12",
    "document_tone": {
      "tones": [
        {
          "score": 0.554859,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        },
        {
          "score": 0.587221,
          "tone_id": "joy",
          "tone_name": "Joy"
        }
      ]
    },
  }
]

let results = [];

for (chap of chapLevel) {
  for (tone of chap.document_tone.tones) {
    let inArr = results.find(function(element) {
      return element["emotion"] === tone.tone_id;
    });
    
    if (inArr) {
      // results[].score += tone.score;
      // console.log(tone.tone_id)
      inArr["score"] += tone.score;
    } else {
      let newObj = {};
      newObj.emotion = tone.tone_id;
      newObj.score = tone.score;

      results.push(newObj);
    }

  }
}

let overallScore = 0;

for (r of results) {
  overallScore += r.score;
}

for (r of results) {
  r.score = r.score/overallScore;
}

console.log(results);

let order = [
  "anaytical",
  "sadness",
  "fear",
  "confident",
  "joy",
  "tentative",
  "anger"
]

let colors = [
  '#64368f', //purple rgb(100,54,143)
  '#0775ba', //blue rgb(7,117,186) (not used)
  '#00b4df', //lightblue rgb(0,180,191)
  '#b5dcb7', //green rgb(181,220,183)
  '#d7e489', //greenyellow rgb(215,228,137) (not used because confident isnt used)
  '#f8ec2d', //yellow rgb(248,236,45)
  '#ef673c', //orange rgb(239,103,60)
  '#eb3c39', //red rgb(235,60,57)
]

// 2: {emotion: "analytical", score: 0.10365063537107432} 10.36
// 0: {emotion: "sadness", score: 0.24080351121249116} 34.44
// 4: {emotion: "fear", score: 0.1083354660555674} 45.27
// 1: {emotion: "joy", score: 0.32475324551220797} 77.75
// 3: {emotion: "tentative", score: 0.11830067944680238} 89.58
// 5: {emotion: "anger", score: 0.1041564624018567} 100


// #eb3c39 0%, 
// #ef673c 10.36%, /* anger */
// #f8ec2d 22.19%, /* tentative */
// #6fc874 54.67%, /* joy */
// /*     #b5dcb7 54.67%, confident */
// #00b4df 65.5%, /* fear */
// #0775ba 89.58%, /* sadness */
// #64368f 100% /* analytical */


//STYLES NEEDED
// https://codepen.io/tiffylou/pen/gOgKxZb
// div {
//   min-height: 400px;
//   width: 800px;
//   background: linear-gradient(120deg, 
//     #64368f 10.36%, //rgb(100,54,143)
//     #00b4df 34.44%, //rgb(0,180,191)
//     #b5dcb7 45.27%, //rgb(181,220,183)
//     #f8ec2d 77.75%, //rgb(248,236,45)
//     #ef673c 89.58%, //rgb(239,103,60)
//     #eb3c39 100% //rgb(235,60,57)
//   );
// }

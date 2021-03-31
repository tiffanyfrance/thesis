var settings = {
    "url": `https://api.meaningcloud.com/deepcategorization-1.0?key=${MC_API_KEY}&txt='I am so happy! But kind of sad, too'&model=Emotion_en`,
    "method": "POST",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    console.log(response.category_list);
  });
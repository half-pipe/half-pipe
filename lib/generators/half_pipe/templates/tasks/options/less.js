
/**
 * Asset helper methods
 *
 * These methods are used to define custom functions for LESS
 */
function asset_path(less, asset, type) {
  switch (type.value) {
    case "image":
      return image_path(less, asset);
    case "video":
      return video_path(less, asset);
    case "audio":
      return audio_path(less, asset);
    case "font":
      return font_path(less, asset);
  }

  return "";
}

function asset_url(less, asset, type) {
  return "url(" + asset_path(asset, type) + ")";
}

function image_path(less, img) {
  return "/assets/images/" + img.value;
}

function image_url(less, img) {
  return "url(" + image_path(img) + ")";
}

function video_path(less, video) {
  return "/assets/video/" + video.value;
}

function video_url(less, video) {
  return "url(" + video_path(video) + ")";
}

function audio_path(less, audio) {
  return "/assets/audio/" + audio.value;
}

function audio_url(less, audio) {
  return "url(" + audio_path(audio) + ")";
}

function font_path(less, font) {
    return "/assets/fonts/" + font.value;
}

function font_url(less, font) {
  return "url(" + font_path(font) + ")";
}

var asset_helper_methods = {
  "asset-url":  asset_url,
  "asset-path": asset_path,
  "audio-path": audio_path,
  "audio-url":  audio_url,
  "font-path":  font_path,
  "font-url":   font_url,
  "image-path": image_path,
  "image-url":  image_url,
  "video-path": video_path,
  "video-url":  video_url
};

module.exports = {
  options: {
    sourceMap: true,
    outputSourceFiles: true,
    sourceMapURL: "main.css.map",
    sourceMapFilename: "<%%= dirs.tmp %>/public/assets/styles/main.css.map",
    paths: ["<%%= bowerOpts.directory %>"],
    customFunctions: asset_helper_methods
  },
  debug: {
    files: {
      "<%%= dirs.tmp %>/public/assets/styles/main.css": "<%%= dirs.tmp %>/prepare/assets/styles/main.less"
    }
  },
  "public": {
    files: {
      "<%%= dirs.tmp %>/public/assets/styles/main.css": "<%%= dirs.tmp %>/prepare/assets/styles/main.less"
    }
  }
};
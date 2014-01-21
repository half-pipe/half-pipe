module.exports = {
  options: {
    sourceMap: true,
    outputSourceFiles: true,
    sourceMapURL: "main.css.map",
    sourceMapFilename: "<%%= dirs.tmp %>/public/assets/styles/main.css.map"
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


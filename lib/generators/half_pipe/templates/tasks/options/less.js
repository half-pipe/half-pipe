module.exports = {
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


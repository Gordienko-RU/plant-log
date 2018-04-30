const path = require('path');
const url = require('url');

const createUrl = relatedPath => url.format({
  pathname: path.join(__dirname, relatedPath),
  protocol: 'file',
  slashes: true,
})

module.exports = {
  createUrl,
}

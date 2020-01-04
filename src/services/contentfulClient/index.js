const contentful = require('contentful');

const client = contentful.createClient({
  space: '',
  accessToken: '',
  host: 'cdn.contentful.com',
});

export default client;

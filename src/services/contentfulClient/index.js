const contentful = require('contentful');

const client = contentful.createClient({
  space: 'jspcmb9ltjbk',
  accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN,
  host: 'cdn.contentful.com',
});

export default client;

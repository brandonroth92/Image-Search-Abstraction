const Search = require('google-search');
const History = require('../../models').history;
const API_KEY = process.env.GOOGLE_KEY;
const CX_KEY = process.env.GOOGLE_CX;

module.exports = function(app) {
  
  app.route('/latest')
  .get(getHistory);
  
  app.get('/:query', handleGet);
  
};

//find and return up to 10 most recent entries in db, only return "term" and "when"
function getHistory(req, res) {
  History.
    find({}, { _id: 0, term: 1, when: 1 }).
    limit(10).
    sort({ when: -1 }).
    exec(function(err, history) {
      if (err) return console.error(err);
      res.status(200).send(history);
  });
};

//set up google search and history object
function handleGet(req, res) {
  var query = req.params.query;
  var search = new Search({ 
    key: API_KEY,
    cx: CX_KEY
  });
  var history = {
    "term": query,
    "when": new Date().toLocaleString()
  };

  save(history);
  
  //build search using query
  search.build({
    q: query,
    searchType: 'image',
    num: 10
  }, function(err, results) {
    if (err) throw err;
    res.status(200).send(results.items.map(makeList));
    }
  );
};

//turn search response into meaningful list of image data
function makeList(img) {
  return {
    "url": img.link,
    "snippet": img.title,
    "thumbnail": img.image.thumbnailLink,
    "context": img.image.contextLink
  };
};

//save history object into database
function save(obj) {
  var history = new History(obj);
  history.save(function(err, history) {
    if (err) throw err;
    console.log('Saved: ' + history);
  });
};
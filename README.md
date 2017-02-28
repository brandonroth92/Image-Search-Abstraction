## Image Search Abstraction Layer API
By Brandon Roth

This is an API project for freeCodeCamp's Back End Development Certification. It accepts a GET request and returns image data for relevant images in the form of an array of JSON objects. It can also return a JSON object displaying the most recent queries. See examples below for usage.

You can test it at [https://brandonr-image-search.herokuapp.com/] (https://brandonr-shorturl.herokuapp.com/)

### Example query usage:

```
https://brandonr-shorturl.herokuapp.com/dogs
```

### Example 'recent searches' usage:

```
https://brandonr-shorturl.herokuapp.com/latest
```

### Example query output:

```javascript
[{"url":"http://www.example.com","snippet":"Example Title","thumbnail":"http://www.examplethumbnail.com",  "context":"https://www.examplecontext.com"}]
```

### Example 'recent searches' output:

```
[{"term":"example","when":"2/27/2017, 4:46:16 PM"}]
```

### Running this project
Simply launch it with node using `npm run start` or `node server.js`
var searchYouTube = (options, callback) => {
  return $.get({
    url: "https://www.googleapis.com/youtube/v3/search",
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      // videoEmbeddable: 'true',
      part: 'snippet',
    },
    success: function(data) {
      console.log('success', data.items);
      // expecting to get a videos array
      // once we get the videos
        // if theres a callback passed in
          // call the callback on t e video list
        data.items.map(video => callback(video))
      },
    error: function(data) {
      console.log('FAIL', data);
    }
    });
};

window.searchYouTube = searchYouTube;


// $.ajax({
//     // This is the url you should use to communicate with the parse API server.
//     url: this.server,
//     type: 'GET',
//     data: 'order=-createdAt&limit=100',
//     dataType: 'json',
//     contentType: 'application/json',
//     success: function (data) {
//       console.log('w0000t');
//       $('#roomSelect').on('change', function() {
//         this.currRoom = $(this).val();
//         console.log($(this).val())
//         App.prototype.goToRoom(this.currRoom, data.results);
//       });
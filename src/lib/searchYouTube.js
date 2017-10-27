var searchYouTube = (options, callback) => {
  $.get({
    url: "https://www.googleapis.com/youtube/v3/search",
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
    },
    success: function(data) {
      console.log('success');
      var info = {
        videoList: data.items,
        currentVideo: data.items[0]
      };

      callback(info);
      },
    error: function(data) {
      console.log('FAIL');
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
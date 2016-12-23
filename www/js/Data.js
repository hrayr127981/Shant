shantApp.factory('youtubeApi', ['$http',function($http){
  var youtubeApi = {};
  youtubeApi.getPlaylist = function(params){
    return $http.get('https://www.googleapis.com/youtube/v3/search', {params:params})
  };
  youtubeApi.getPlaylistItem = function(params){
    return $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {params:params})
  };
  youtubeApi.config = [];
  youtubeApi.config.mainVideo = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '5',
    part: 'snippet',
    channelId: 'UCBoGmjONeZ6PL5IbK6qZv0Q',
    order:'date',
    type : 'video'
  };
  youtubeApi.health = {
    key: 'AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA',
    maxResults: '5',
    part: 'snippet',
    playlistId: 'PLIdKbEnBj_B-u5UrBL-I8JBzrJW3vuDZ2',
    order:'viewCount'
  };
  return youtubeApi;
}])



var searchYouTube = (options, callback) => {
  $.ajax({
    type:'GET',
    url: ,
    data:{
      query: options.query,
      type: 'video',
      part: 'snippet',
      key: options.key,
      maxResults: options.max
    },
    videoEmbeddable: true,

    success: function(data){
      if (callback){
          callback(data.items)
      }
    },
    error:function()

  })
};

export default _.debounce(searchYouTube, 300)



//debounce method to 

//_.debounce(searchYouTube, 300)
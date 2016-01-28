
const clientId='4b19689470ca4f979e90eec448b30963';
const clientSecret='bfa6d61bb81d4d4eaac37f87de45f57b';

    // API endpoint for Instagram's popular images for the day.
    // The API requires a key that is defined as a property of the component.
    var url = 'https://api.instagram.com/v1/media/popular?client_id=' + clientId + '&callback=?';

    // Fetch some new images.
    $.getJSON(url, function(result) {
      if(!result || !result.data || !result.data.length){
        return;
      }
      var pictures = result.data.map(function(p){
        return {
          id: p.id,
          url: p.link,
          src: p.images.low_resolution.url,
          title: p.caption ? p.caption.text : ''
        };


      });
    });

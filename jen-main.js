/*
  Here is a guide for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
let audioPlayer = document.querySelector(".music-player");
let form = document.querySelector(".search-form");
let results = document.querySelector(".results");

// 2. Create your `onSubmit` event for getting the user's search term
form.onsubmit = function onSubmit() {
  console.log(form.search.value);
  event.preventDefault();
  searchSoundCloud(form.search.value);
};

// 3. Create your `fetch` request that is called after a submission
function searchSoundCloud(song){
  fetch( "http://api.soundcloud.com/tracks?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=" + song)
  .then(function(response){
    response.json().then(function(data){
      renderMusic(data);

    })
  })
}

// 4. Create a way to append the fetch results to your page
function renderMusic (musicToRender) {
   // console.log("hello");
    var musicListHTML = "";
    musicToRender.forEach(
        function(eachResponse) {
        console.log(eachResponse.artist);
        console.log(eachResponse.artwork_url);
        console.log(eachResponse.kind);
        
            
            musicListHTML += "<li class=`list-group-item`>" + eachResponse.title + "</li>";
            musicListHTML += "<img src='" + eachResponse.artwork_url + "' >";
          });
results.innerHTML = musicListHTML;
}

// 5. Create a way to listen for a click that will play the song in the audio play







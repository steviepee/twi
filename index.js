
$(document).ready(() => {
  const $body = $('body');
  //$body.html('');
  //////////////////// FIX YO! FACE //////////////////////////////////
  
  ///Create a div atop the regular body upon which to lay the tweets
  $body.append(`<div id="face"></div>`)
  //make it easier..
  const $face = $(`#face`)
  /// face css///
  $face.css('height', '820px')
  /////////////////
  let matrix = streams.home
  $face.append(`<button id="add-tweets">YO!</button>`)
  let $tweeter = $(`#add-tweets`)
/////TWEET OBJECT ///////////////////////Still add path to username page on each one
  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div class="tweetz"></div>');
    $(`${tweet.user}`).on('mouseover', function (){
      alert("It Works!!!")
    });
    const text = `@${tweet.user}: ${tweet.message}
    ${moment(tweet.created_at).format('MMM DD, YYYY, h:mm:ss a')}
    ${moment(tweet.created_at).fromNow()}`
    //attempt to add NewDate directly to text
   // $(`.tweetz`).append(`${tweet.created_at}`);
    $tweet.text(text);
//$face.append($tweet);
    return $tweet;
  });//have tweets append to front div instead of body itself
  //let yoDown = () => {
   // $face.append($tweets);
 // }
  //$face.append($tweets);
  console.log(users)
  const postTweets = tweets => {
    //iterate through the array backwards(compensate for reverse order)
    let spot = tweets.length - 1;
    //until we reach the 0 index
    while (spot >= 0){
      //set a variable for array[nth]
      let tweet = tweets[spot];
      //at each iteration, add the tweetz div with all the same things $tweets holds
      //adding them directly  to the div here.
      $(`${tweet[`user`]}`).attr(`color`, `red`);
      $(`${tweets[spot].user}`).attr(`background-color`, `blue`);
      $face.append(`<div class="tweetz">@${tweet.user}: ${tweet.message}
    ${moment(tweet.created_at).format('MMM DD, YYYY, h:mm:ss')}
    ${moment(tweet.created_at).fromNow()}</div>`);
      spot--;
    }
  }//set the postTweets command to the Yo button
  postTweets(streams.home);
  $tweeter.on(`click`, function (){
      return postTweets(streams.home);
  });
  //$(`.tweetz.tweet.user`).css(`color`, `red`);


  //////////////  SIDEBAR!!  ////////////////////////////////////
  //////////////////////////////////////////////////////////////
  $body.append(`<div id="yO-tweet"class="sidebar"></div>`

  

//   .sidebar {
//     margin: 0;
//     padding: 0;
//     width: '200px';
//    // background-color: #f1f1f1;
//     position: fixed;
//     height: '100px';

//   }
// });




/**possible need to fetch bunches of tweets
 * const getTweets = () => {
 * return fetch([group of tweets]).then(tweets => {
 * return tweets.json();
 * })
 * }
 */

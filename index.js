
$(document).ready(() => {
  const $body = $('body');
  $body.html('');
  $body.css(`background`, `yellow`)
  
  ///Create a div atop the regular body upon which to lay the tweets
  $body.append(`<div id="face"></div>`)
  //make it easier..
  const $face = $(`#face`)
  /// face css///
  //////////////////// FIX YO! FACE //////////////////////////////////
  $face.css({
    width: `900px`,
    overflow: `hidden`,
    text_align: `left`, 
    margin: `20px 0 20px 0`,
    // height: '100%',

     position: "right",
   // background: "yellow",
    //display: `grid`,
    place_items: `right`,
    //align_items: `center`
  })
  /////////////////
  let matrix = streams.home
  $body.prepend(`<button id="add-tweets">YO!</button>`)
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
     // $(`${tweet[`user`]}`).attr(`color`, `red`);
     // $(`${tweets[spot].user}`).attr(`background-color`, `blue`);
      $face.append(`<div id="${tweet.user}"class="tweetz"><span class="clickit">@${tweet.user}</span>: ${tweet.message}
    ${moment(tweet.created_at).format('MMM DD, YYYY, h:mm:ss')}
    ${moment(tweet.created_at).fromNow()}</div>`);
   
    
    
    /////////////////////// TWEETZ STYLES!!  //////////////////////
    $('.tweetz').css({
      align_items: `right`,
      display: `inline-block`,
      border: `12px outset red`,
      text_shadow: `20px 20px lightblue`,
      // border_style: `solid`,
      // border_color: `black`,
      margin: `20px`,
      // background_color: `pink`
      padding: '2em',
      width: '70%',
      height: '20px',
      //box_sizing: 'border-box',
      
      
      
    })
    spot--;
  }
}//set the postTweets command to the Yo button
postTweets(streams.home);
$tweeter.on(`click`, function (){
  //There were just too many of them, so cut the stream short to the most recent 10.
  return postTweets(streams.home.slice(streams.home.length - 10, streams.home.length - 1));
});
//$(`.tweetz.tweet.user`).css(`color`, `red`);
$(`.clickit`).on(`click`, function(e) {
  e.stopPropagation;
  return console.log(`You're doing it, Peter!`);
  
 });
/////////////////// MAKE JUST ONE TWEET!! /////////////////////////

const singTweet = tweet => {
  //copy tweetz css for writeTweet function:
  $(`${tweet.user}`).click( function(){
    alert(`Huzzah!!`);
  })
  $face.prepend(`<div id="${tweet.user}"class="tweetz"><span class="flickit">@${tweet.user}</span>: ${tweet.message}
    ${moment(tweet.created_at).format('MMM DD, YYYY, h:mm:ss')}
    ${moment(tweet.created_at).fromNow()}</div>`);
    $('.tweetz').css({
      align_items: `right`,
      display: `inline-block`,
      border: `12px outset red`,
      text_shadow: `20px 20px lightblue`,
      // border_style: `solid`,
      // border_color: `black`,
      margin: `20px`,
      // background_color: `pink`
      padding: '2em',
      width: '70%',
      height: '20px',
      //box_sizing: 'border-box',
      
      
      
    })
    $(`.flickit`).on(`click`, function(e) {
     e.stopPropagation;
     return console.log(`You're doing it, Peter!`);
     
    });
  }
  
  //////////////  SIDEBAR!!  ////////////////////////////////////
  //////////////////////////////////////////////////////////////
  $body.append(`<div id="side-clicks"class="sidebar"></div>`)
  
  const $sideClicks = $(`#side-clicks`); 
  $sideClicks.css(`display`, `inline`);
  $sideClicks.css(`margin`, `10`);
  $sideClicks.css(`padding`, `8`);
  $sideClicks.css(`width`, `320px`);
  $sideClicks.css(`background-color`, `green`);
  $sideClicks.css(`position`, `absolute`);
  $sideClicks.css(`height`, `1000px`);
  $sideClicks.css(`right`, `25px`);
  $sideClicks.css(`font-size`, `20px`);
  $sideClicks.css(`margin-left`, `50px`);
  $sideClicks.css(`top`, `110px`);
  /////////////////////////  MAKE YOUR TWEET FORM ////////////////////////////////////
  $sideClicks.append(`<form id="yo-tweet class="tweet-click">
    <div id="yo-name" class="tweet-click">
    <label id="username" class="tweet-click" for="name">& You Are?</label>
    <input type="text" id="name" class="tweet-click" />
    </div>
    <div id="yo-message" class="tweet-click">
    <label id="x2"for="msg>Speak Yo mind!</label>
    </div>
    <button id="fake-butt" class="tweet-click"type="submit"></button>
    </form>`
  );
  
  $(`#x2`).append(`<textarea id="msg" name="clicker" class="tweet-click" placeholder="Whatchu say?"></textarea>`);
  $sideClicks.append(`<button id="post-tweet" class="tweet-click"type="submit">Yo yo!</button>`);
  $(`.tweet-click textarea`).css ({
    vertical_align: `right`,
    height: `70px`,
    width: `280px`,
    margin: `10px`,
    padding: `8px`,
    //display: `4px outset gold `,
  })
  $username = $(`#username`)
  //write a tweet button
  $(`#post-tweet`).on(`click`, function () {
    document.preventDefault;
    let dude = document.querySelector(`input[type="text"]`).value
    let stuff = document.getElementById(`msg`).value
    window.visitor = document.querySelector(`input[type="text"]`).value
    if(!streams.users.hasOwnProperty(dude)){streams.users[dude] = []}
    writeTweet(stuff);
    console.log(matrix.slice(matrix.length - 1))
    return singTweet(matrix[matrix.length - 1]);
  })
  
  
  

});




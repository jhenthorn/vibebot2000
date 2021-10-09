
const { auth, postReplyWithMedia, postReply  } = require('./config.js');

const client = auth();

client.stream('statuses/filter', { track: '@jhenthorn !yuck' }, function (stream) {
  console.log("Searching for tweets...");

  // when a tweet is found
  stream.on('data', function (tweet) {
    console.log("Found one!");
    console.log("Received tweet reading...", tweet.text);

    // some code to respond to the tweet

    console.log("Replying to tweet.");
    postReplyWithMedia(client, "./media/double-toadz.mp4", tweet);
    //console.log("Tweet didn't provide media. Replying with message.");
    //const message = "Yes, they're great!";
    //postReply(client, message, tweet);


    stream.on('error', function (error) {
      console.log(error);
    });
  });
});
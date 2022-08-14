function shout(string) {
return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
    }


function logShout(spy) {

    console.log(spy.toUpperCase());
}

function logWhisper(spy) {

    console.log(spy.toLowerCase());
}

function sayHiToHeadphonedRoommate (aWord) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var lovUnswer = "I would love to!";
    if (aWord.toLowerCase(aWord) === aWord) {
      return cantUnswer;
    }
    else if (aWord.toUpperCase(aWord) === aWord) {
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === aWord) {
      return lovUnswer
    }
  }
"use strict";

/*
Use this function to load the data.json file. Once it is loaded, extract a couple of messages so that you know the loading was successful. Remember, in order for this to work, you need to run the files through a server.
*/

const loadJSON = function(path) {
    fetch(path)
    .then(data => data.json())
    .then(obj => console.log(obj.data_messages.data_resuming));
};

loadJSON('./data.json');
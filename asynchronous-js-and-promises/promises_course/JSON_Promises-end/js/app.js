"use strict";

fetch("./data_class.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data.students);
    });

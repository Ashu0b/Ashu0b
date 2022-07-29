let axios =require('axios')
const express=require('express')
const fetch = require("node-fetch")


let app_id = "id";    //	fd57c3f1
let app_key = "key";    //	ca6eec39ebfc833023979a5f57cc8f5d

let endpoint = "entries";
let language_code = "en-gb";
let word = "example"
const getwords=async (req,res)=>{
    const word = req.params.id;

    let url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word}`;
  
    fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: { app_key: app_key, app_id: app_id },
    })
      .then((response) => response.json())
      .then((data) => res.send(data));
}


module.exports={
    getwords
}
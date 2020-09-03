const express = require ('express')
const server = express()
const cors = require('cors')
const querystring =require('querystring');

server.use(express.json());

let client_id= '97a6dd834548478295bdb781f20e6f19'
let client_sec='b1995e93d7ed4797b0406e4c6c6dab8e'
const redirect_uri=
process.env.REDIRECT_URI || 
'http://localhost:8888/callback'
const stateKey='spotify_auth_state';

const request = require('request'); // "Request" library
const cookieParser = require('cookie-parser');


server.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email user-read-recently-played user-top-read playlist-read-private',
      redirect_uri
    }))
})

server.get('/callback', function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    var access_token = body.access_token
    let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
    res.redirect(uri + '?access_token=' + access_token)
  })
})





module.exports=server;
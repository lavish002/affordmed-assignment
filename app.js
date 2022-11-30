const express = require("express");

const fetch = require('node-fetch');
const app = express()

// app.use((req,res) => {
//     console.log(res)
//     res.send({color: 'red'})
// })

http://localhost:port/numbers?url=http://something.com/primes

app.use(express.json());
app.use(express.urlencoded());
// app.use(express.methodOverride());

function isValidUrl(str) {
    const pattern = new RegExp(
      '^([a-zA-Z]+:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i'
    );
    return pattern.test(str);
  }

  async function getData(url) {
    
  
    return out;
  }

app.get('/numbers', async function(req, res) {

    var input = []
    var r = req.query
    console.log(r.url)
    var ans
    for(let i=0; i<r.url.length; i++){
        let url = r.url[i]
        // if you want to use server uncommit if loop
        // if(isValidUrl(r.url[i])){
            await fetch(url)
            .then(res => res.json())
            .then(out => {
                for(let i=0; i<out.numbers.length; i++){
                    input.push(out.numbers[i])
                }
                    
            })
            .catch(err => { throw err });
        // }
        
    }
    var g = new Set(input)
    console.log(g)
    const numbers = JSON.stringify(Array.from(g));
    res.send({numbers})
});


app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
);
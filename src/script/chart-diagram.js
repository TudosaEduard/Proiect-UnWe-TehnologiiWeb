const postPromise = fetch('https://unemployment-rate-web-api.herokuapp.com/history/?county-id=42&from-month=5&from-year=2020&to-month=8&to-year=2020')
    
postPromise
    .then(data => data.json())
    .then(data => {
        var response = data[0];
        for (var key in response)
            console.log(key.toString());
    })
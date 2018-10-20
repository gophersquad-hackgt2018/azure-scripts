var axios = require('axios')
var search = require('./searchKeywords')
let subscriptionKey = 'ef4f101e2121440581ff9ebfaf09dfd0';

var postData = {
  "documents": [
        {
            "language": "en",
            "id": "1",
            "text": "We love this trail and make the trip every year. The views are breathtaking and well worth the hike!"
        },
        {
            "language": "en",
            "id": "2",
            "text": "Poorly marked trails! I thought we were goners. Worst hike ever."
        },
        {
            "language": "en",
            "id": "3",
            "text": "Everyone in my family liked the trail but thought it was too challenging for the less athletic among us. Not necessarily recommended for small children."
        },
        {
            "language": "en",
            "id": "4",
            "text": "It was foggy so we missed the spectacular views, but the trail was ok. Worth checking out if you are in the area."
        },                
        {
            "language": "en",
            "id": "5",
            "text": "This is my favorite trail. It has beautiful views and many places to stop and rest"
        }
    ]
};

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      'Ocp-Apim-Subscription-Key' : subscriptionKey,
      'Accept' : 'application/json;charset=UTF-8',
  }
};

axios.post('https://southcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases', postData, axiosConfig)
.then((res) => {
  console.log("RESPONSE RECEIVED: ", res.data);
  res.data.documents.forEach(item => {
    item.keyPhrases.forEach(keyP => {
      console.log(keyP)
      search.bing_web_search(keyP);
    })
  })
})
.catch((err) => {
  console.log("AXIOS ERROR: ", err);
})
// var axios = require('axios')
// let subscriptionKey = 'ef4f101e2121440581ff9ebfaf09dfd0';
// var data = {
//         "documents": [
//             {
//                 "language": "en",
//                 "id": "1",
//                 "text": "We love this trail and make the trip every year. The views are breathtaking and well worth the hike!"
//             },
//             {
//                 "language": "en",
//                 "id": "2",
//                 "text": "Poorly marked trails! I thought we were goners. Worst hike ever."
//             },
//             {
//                 "language": "en",
//                 "id": "3",
//                 "text": "Everyone in my family liked the trail but thought it was too challenging for the less athletic among us. Not necessarily recommended for small children."
//             },
//             {
//                 "language": "en",
//                 "id": "4",
//                 "text": "It was foggy so we missed the spectacular views, but the trail was ok. Worth checking out if you are in the area."
//             },                
//             {
//                 "language": "en",
//                 "id": "5",
//                 "text": "This is my favorite trail. It has beautiful views and many places to stop and rest"
//             }
//         ]
// }
// var config = {
//   headers: {
//       'Ocp-Apim-Subscription-Key' : subscriptionKey,
//       'Content-Type' : 'application/json',
//       'Accept' : 'application/json',
//   }
// };

// const getPhrases = () => {
//   try {
//     axios.post('https://southcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases',data, config)
//     .then(function(response){
//       console.log('saved successfully')
//       console.log(response.data.message)
//     });  
//   } catch (error) {
//     console.error(error)
//   }
// }

// getPhrases()
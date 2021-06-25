// import axios from 'axios'
// import {firestore} from '../firebase/firebase.utils'
// const APIKEY = ['8ab5fa53ef8f45d3a3d5c00e6966c9a3',
// 'cc548ac21e2642999689cdff7acb3468',
// '8e743479e9f9467795afffbb26844379',
// 'c7a232f614b84f2bb1df4d3d7a3bc567',
// '4a5b12ec6f3d4159b4b160e8808f4601',
// '9a0f78a9a9fb4e1ba5857d871f42f1a8']
// const baseUrl = 'https://api.spoonacular.com';
// const handleRecipes = (responseObjects)=>
// {
//     // console.log('handle Recipes input ---',responseObjects)
//     var recipeResults = []
//     responseObjects.map((object) =>
//         {
//             var recipeObject = {
//                 id:object.id,
//                 image:object.image,
//                 title:object.title,
//                 summary:object.summary,
//                 found:true
//             }
//             var steps = []
//             var ingredients = []
//             var equipment = []
//             if(object.analyzedInstructions.length == 0)
//             {
//                 recipeObject.found = false;
//                 steps=['Steps are currently unavailable for this dish']
//                 ingredients = [' ']
//                 equipment = [" "]
//                 recipeObject ={...recipeObject,ingredients,equipment,steps}
//             }
//             else if(object.analyzedInstructions[0])
//             {
//                 var grpObj = object.analyzedInstructions[0].steps.map(
//                     (item) =>
//                     {
//                         console.log(item)
//                         var  {step,ingredients,equipment} = item
//                         return (
//                             {step,ingredients,equipment}
//                             )
//                         }
//                         )
//                     recipeObject = {...recipeObject,grpObj}
//             }
//             if (recipeObject)

//                 recipeResults.push(recipeObject)
//             // pushing the elements to the firebase
//         })
//         if(recipeResults.length === 0)
//         {
//             recipeResults = [{title:'we could not find any results for this query',found:false}]
//         }
//         console.log(recipeResults)
//         firestore.collection('home-PageRecipes123').add(
//                     {recipeResults}
//                     )
//                     console.log('pushed succesfully')
// }
//         // setHomeRecipes(recipeResults)


// //  API calling
// const findRecipes = (value,number) =>
// {
//     console.log(`${baseUrl}/recipes/complexSearch?addRecipeInformation=true&offset=${value}apiKey=${APIKEY[1]}&number=${number}`)
//     axios.get(`${baseUrl}/recipes/complexSearch?addRecipeInformation=true&offset=${value}&apiKey=${APIKEY[1]}&number=${number}`)
//     .then((response) =>
//     {
//         if(response.data.results)
//         { 
//             handleRecipes(response.data.results)
//         }
//     })
//     .catch((err)=>console.log(err))
// };


// //  pushing the recipes to the firestore
// for(let i = 0; i<1;i++)
// {
//     findRecipes(i*1,10);
// }
// export  {findRecipes};
// var store = new Set()
// const findfact = (i) =>
// {

//     axios.get(`${baseUrl}/food/trivia/random?apiKey=${APIKEY[i]}`)
//     .then(response =>
//         {
//             console.log(response.data.text)
//             store.add(response.data.text)
//             firestore.collection('facts/docs/factsList').add({fact:response.data.text})
//         })
//     }
// for (let i =1 ;i <7 ; i++)
// {

//     for (let j = 0;j<130;j++)
//     {
//         findfact(i)
//     }
// }

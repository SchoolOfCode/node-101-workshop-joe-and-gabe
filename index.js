 import { myCollection } from "./collection.js"
// console.log(myCollection);

// If there's only one of the item in your collection, it should log "I have a name. Here's what I like about it: whatILike". 
// If you have more than one of it, the message should log "I have count names. Here's what I like about them: whatILike".
let i = 0;

function describeItem(item){
  if (item.count === 1){ 
    console.log("I have a " + item.name + ". Here's what I like about it: " + item.whatILike + ".")
  } 
  if (item.count > 1){
      console.log("I have " + item.count + " " + item.name +"s" + ". Here's what I like about them: " + item.whatILike + ".")
    }
  }
  
function describeCollection(array){
  for (i = 0; i < myCollection.length; i++){
    describeItem(array[i])

  }
}
describeCollection(myCollection);
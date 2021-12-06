let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];
// console.log(myCollection);

// If there's only one of the item in your collection, it should log "I have a name. Here's what I like about it: whatILike". 
// If you have more than one of it, the message should log "I have count names. Here's what I like about them: whatILike".

function describeItem(){
    let itemName = myCollection.name;
    let whatILike = myCollection.whatILike
    console.log("I have a " + itemName +". Here's what I like about it:" + whatILike +".")
}

describeItem([0]);
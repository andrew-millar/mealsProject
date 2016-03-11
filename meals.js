// TODO: form app into a meteor version

var meals = [
  // {
  //   id:"1", // arbitrairy unique number
  //   title:"", // Title of the dish
  //   ingredients: ["", ""], // required ingredients
  //   groceries: ["", ""], // things that are not stuff that you already have in store
  //   methods: ["", ""], // how to prepare the dish
  //   materials: ["", ""], // special tools required for preperation
  //   tags:["",""]  // quizines, ingredient or dish types, like "french", "pasta", "italian", "soep"
  // },
  {
    id:"1",
    title:"Tomaten Bassillicum Parmigiano soep",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["soep", "americaans", "parmigiano", "maaltijd soep"]  
  }, 
  {
    id:"2",
    title:"Groente Soep",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["hollands","soep", "nogiets"]  
  },
  {
    id:"3",
    title:"Mosterd Soep",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["soep", "hollands"]  
  },
  {
    id:"4",
    title:"Vega Lasegne",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["vega","Italiaans"]  
  },
  {
    id:"5",
    title:"Chilli con Carne",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["mexicaans","rijst"]  
  },
  {
    id:"6",
    title:"Vega Curry",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["idiaas","vega"]  
  },
  {
    id:"7",
    title:"Pasta bolognese",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["pasta","italiaans"]  
  },
  {
    id:"8",
    title:"Zalm pasta",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["pasta","italiaans"]
  },
  {
    id:"9",
    title:"Boeuf bourguignon",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["frans","stew"]  
  },
  {
    id:"10",
    title:"Stampot rucola tomaat",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["hollands", "aardappel", "meat"]
  },
  {
    id:"11",
    title:"Stampot zuurkool",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["hollands","aardappel", "meat", "winter"]  
  },
  {
    id:"12",
    title:"Stampot boerenkool",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["hollands","aardappel", "meat", "winter"]
  },
  {
    id:"13",
    title:"Chorizo bolognese",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["italiaans", "pasta"]
  },
  {
    id:"14",
    title:"Pannekoeken",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["Hollands",""]  
  },
  {
    id:"15",
    title:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["",""]  
  },
]


// function to get meals based on an entered tag
// perhaps also give the opertunity to extend function to allow to search on the 
// ingredients, to do so for others seem unhelpfull, form into a helper function 
// at a later stage

function getNewSellection (tag) {
  var collection = [];
  for (var i = 0; i < meals.length; i++) {
    var tags = meals[i].tags
    console.log(tags);
    for (var j = 0; j < tags.length; j++) {
      if (tag.toLowerCase() === tags[j].toLowerCase() && collection.indexOf(tags[j].toLowerCase()) === -1){
        console.log("same");
        collection.push(meals[i]);
      }
    }
  }
  console.log(collection);
  return collection;
}

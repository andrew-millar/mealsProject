// TODO: form app into a meteor version

var meals = [
  // {
  //   id:"1", // arbitrairy unique number
  //   title:"", // Title of the dish
  //   ingredients: ["", ""], // required ingredients
  //   groceries: ["", ""], // things that are not stuff that you already have in store
  //   methods: ["", ""], // how to prepare the dish
  //   materials: ["", ""], // special tools required for preperation
  //   tags:["",""],  // quizines, ingredient or dish types, like "french", "pasta", "italian", "soep"
  //   source: ""  // a possible source of the recipe
  // },
  {
    id:"1",
    title:"Tomaten Bassillicum Parmigiano soep",
    description:"",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["soep", "americaans", "parmigiano", "maaltijd soep"],
		source:""
  }, 
  {
    id:"2",
    title:"Groente Soep",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["hollands", "soep", "nogiets"],
		source:""
  },
  {
    id:"3",
    title:"Mosterd Soep",
    description:"",
    ingredients: ["200gr aardappelen", "mosterd", "200ml slag/kook-room", "kippen boullion", "een prei", "een ui", "spek", "boter of olie"], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["soep", "hollands"],
		source:""
  },
  {
    id:"4",
    title:"Vegatarische Lasegne",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["vega", "Italiaans"],
		source:""
  },
  {
    id:"5",
    title:"Chilli con Carne",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["mexicaans", "rijst"],
		source:""
  },
  {
    id:"6",
    title:"Vegatarische Curry",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["idiaas", "vega"],
		source:""
  },
  {
    id:"7",
    title:"Pasta bolognese",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["pasta", "italiaans"],
		source:""
  },
  {
    id:"8",
    title:"Zalm gourgette pasta",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["pasta", "italiaans"],
		source:""
  },
  {
    id:"9",
    title:"Boeuf bourguignon",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["frans","stew"],
		source:""
  },
  {
    id:"10",
    title:"Stampot rucola tomaat",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["nederlands", "aardappel", "meat"],
		source:""
  },
  {
    id:"11",
    title:"Stampot zuurkool",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["nederlands", "aardappel", "meat", "winter"],
		source:""
  },
  {
    id:"12",
    title:"Stampot boerenkool",
    description:"",
    ingredients: ["1kg Aardappelen", "400gr boerenkool", "gerookte worst", "uien", "150ml melk", "60gr boter", "optioneel: 150gr Spekjes"], 
    groceries: ["", ""], 
    methods: ["Zet de rookworst op het vuur in ruim water, voorkom koken.","Schil de aardappellen en snij ze in stukken en zet ze in ruim water op het vuur in een ruime pan.", "Snij de boerenkool in kleine stukken.", "Snij de uien in ringen.", "Als het water van de aardappellen kookt voeg dan de Boerenkool toen aan de pan met aardappellen en laat het geheel koken tot de aardappellen gaar zijn.", "Bak de uien (en spekjes) in een kleine steelpal naar smaak.", "Wanneer de aardappellen gaar zijn voeg dan de melk toe plus de boter en stamp het geheel tot de aardappellen zijn fijngestampt, voeg hier eventueel de spekjes toe.", "Verdeel de worst en de uien."]
    materials: ["", ""], 
    tags:["nederlands", "aardappel", "meat", "winter"],
		source:""
  },
  {
    id:"13",
    title:"Chorizo bolognese",
    description:"",
    ingredients: ["dried chorizo (+-200g), coursely chopped", "1 tablespoon extra virgin olive oil", "2 sprigs rosemary, leaves picked (optional)", "¼ teaspoon dried chilli flakes", "2 cloves garlic, crushed", "sea salt and cracked black pepper", "½ cup (125ml) red wine", "400g can chopped tomatoes", "2 tablespoons brown sugar", "4 servings tagliatelle", "250g buffalo mozzarella, torn"],
    groceries: ["chorizo", "garlic", "wine", "400g tin tomato, chopped", "tagliatelle", "mozzarella"],
    methods: ["Place the chorizo in a food processor and process until finely chopped. Set aside.", "Heat the oil in a large frying pan over high heat. Add the rosemary and cook for 30 seconds or until crisp. Remove and set aside.", "Add the chorizo, chilli, garlic, salt and pepper to the pan and cook, stirring, for 3–4 minutes or until golden and crispy. Add the wine and cook for 30 seconds. Add the tomato and sugar and bring to a simmer. Reduce the heat to medium, cover with a lid and cook for 5–6 minutes or until the liquid has slightly reduced. While the chorizo mixture is cooking, cook the pasta in a large saucepan of salted boiling water for 6–8 minutes or until al dente. Drain, reserving ½ cup (125ml) of the cooking liquid. Add the reserved cooking liquid to the chorizo mixture and stir to combine.", "Top the pasta with the chorizo mixture, mozzarella, crispy rosemary and pepper to serve. Serves 4."], 
    materials: ["", ""], 
    tags:["italiaans", "pasta"],
		source:"https://www.donnahay.com.au/recipes/fast-weeknights/chorizo-bolognese-with-buffalo-mozzarella"
  },
  {
    id:"14",
    title:"Pannekoeken",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: [], 
    tags:["nederlands"],
		source:""
  },
  {
    id:"15",
    title:"Kip paksoi",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["oosters", "kip", "paksoi"],
    source:""
  },
  {
    id:"16",
    title:"Linzen soep",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["vega", "linzen"],
    source:""
  },
  {
    id:"17",
    title:"Pizza",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["italiaans", ""],
    source:""
  },
  {
    id:"18",
    title:"Spring rolls",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["oosters", "vega"],
    source:""
  },
  {
    id:"19",
    title:"Risotto",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["italiaans", "rijst"],
    source:""
  },
  {
    id:"20",
    title:"Goulash",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["hongaars", "stew"],
    source:""
  },
  {
    id:"21",
    title:"Burittos",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["mexicaans", ""],
    source:""
  },
  {
    id:"22",
    title:"Pasta salade",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["italiaans", "pasta"],
    source:""
  },
  {
    id:"23",
    title:"Arepas (mercedes)",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["venezuelaans", ""],
    source:""
  },
  {
    id:"24",
    title:"Nasi goreng",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["oosters", "Indo", "rijst"],
    source:""
  },
  {
    id:"25",
    title:"Hachee",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["nederlands", "aardappelen", "stew"],
    source:""
  },
  {
    id:"26",
    title:"Hotspot",
    description:"",
    ingredients: ["", ""], 
    groceries: ["", ""], 
    methods: ["", ""],
    materials: ["", ""], 
    tags:["nederlands", "aardappel"],
    source:""
  },
  {
    "mosterd pasta"
  }
  // {
  //   id:"",
  //   title:"",
  //   ingredients: ["", ""], 
  //   groceries: ["", ""], 
  //   methods: ["", ""],
  //   materials: ["", ""], 
  //   tags:["",""],
  //   source:""
  // },
]


// function to get meals based on an entered tag
// perhaps also give the opertunity to extend function to allow to search on the 
// ingredients, to do so for others seem unhelpfull, form into a helper function 
// at a later stage

function getMealsSellection (tag) {
  var collection = [];
  for (var i = 0; i < meals.length; i++) {
    var tags = meals[i].tags
    for (var j = 0; j < tags.length; j++) {
      if (tag.toLowerCase() === tags[j].toLowerCase() && collection.indexOf(tags[j].toLowerCase()) === -1){
        collection.push(meals[i]);
      }
    }
  }
  return collection;
}

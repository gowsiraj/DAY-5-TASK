// For the given JSON iterate over all loops(for,for in ,for of,forEach)

//FOR LOOP:

var json = [{
    "Brand" : "Lakme", 
    "Price"   : "Rs. 250-500",
    "Features" : "Available in 42 shades, built-in primer, 12-hour wear",
    "Ratings": "4.0/5"
},
{
    "Brand" : "Nykaa", 
    "Price"   : "Rs. 299-599",
    "Features" : "Creamy texture, semi-matte finish",
    "Ratings": "4.3/5"
},
];
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log("Brand: " + obj.Brand,"Price: "+ obj.Price, "Features: " + obj.Features,"Rating "  + obj.Ratings);
}


// FOR IN
var mobile = [{
    "Brand" : "Google Pixel 8 Pro", 
    "Price"   : "1,06,999",
    "Display" : "6.70-inch, 1344x2992 pixels",
    "Processor": "Google Tensor G3"
},
{
    "Brand" : "Apple iPhone 15 Pro Max ", 
    "Price"   : "1,59,900",
    "Display" : "6.70-inch, 1290x2796 pixels",
    "Processor": "Apple A17 Pro" 
},
];
for(var a in mobile) {
    var {Brand,  Price,Display,Processor}=mobile[a]
   
 console.log("Brand: " + Brand,"Price: " + Price,"Display: " +Display,"Processor" + Processor);
}

//FOR OF

var office = {
    "id" : "1", 
    "firstName" : "Melina",
    "lastName" : "Sanjai",
    "bloodGroup": "A+"
};

for (var [key,value] of Object.entries(office))
{
console.log(key,value);
}

// for(var key of Object.keys(office))
//for (var [key,value] of Object.entries(office)
//for (var value of Object.values(office))
//const array1 = ['a', 'b', 'c'];
//for (const element of array1) {
//console.log(element);
 // }

//  FOR EACH:

var school = [{
    "id" : "1", 
    "firstName"   : "Melina",
    "lastName" : "Sanjai",
    "bloodGroup": "A+"
},
{
    "id" : "2", 
    "firstName"   : "Sanjai",
    "lastName" : "Arumugam",
    "bloodGroup": "O+"
}];

school.forEach((item) => {
    console.log('ID: ' + item.id);
    console.log('FirstNmae: ' + item.firstName);
    console.log('LastName: ' + item.lastName);
    console.log('BloodGroup: ' + item.bloodGroup);
  });
  
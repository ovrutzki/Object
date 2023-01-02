// // EX 0

// // const restaurant = {
// //     name : 'Moon',
// //     address :'Bograshuv',
// //     city : 'Tel Aviv',
// //     state: 'Israel',
// //     zipcode : 698243
// // }

// // const student1 = {
// //     name: 'Eran',
// //     age: 28,
// //     grade: 10,
// //     classes:['Math', 'Physics', 'Computers'],
// // }
// // console.log(student1['name']);

// // const book1 = {
// //     title : 'The little prince',
// //     author : 'Antoine de saint',
// //     year : 1943,
// //     genre : 'kids',
// //     publisher : 'Reynal & hitchcook',
// //     pages : 98,
// // }

// // book1.rating=93;
// // console.log(book1);

// // const car = {
// //     make: "Tesla",
// //      model: "Model S",
// //      year: 2020,
// //      color: "Red",
// //      features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
// //    };
   

// //    console.log(car.features[1]);
// // ---------------------------------------------------
// //    4
// const store = {
//     storeName : 'AM-PM',
//     lacation : 'bugrshov',
//     categorise : ['Fresh', 'Dairy', 'Sweets', 'Drinks'],
//     products : [
//         {Productname : 'lemone', price : 5, quantity : 10},
//         {Productname : 'apples', price : 3, quantity : 15},
//         {Productname : 'milk', price : 6, quantity : 5}
//     ],

//     totalPrice : function(product){
//         let price = store.products.find(item=>item.Productname===product).price;
//         let quantity = store.products.find(item=>item.Productname===product).quantity;
//         return quantity * price;
//     }
// }
// console.log(store.totalPrice('apples'));

// // EX 1 ---------------------------------------
// // 1 + 2
// // const person1 = {
// //     name : 'bob',
// //     age : 19,
// //     height : 180
// // }

// // function list(person) {
// //     console.log(Object.values(person));
// //     console.log(Object.keys(person).length)
// // }
// // list(person1);
 
// // 3
// // let client = "Betty";

// // const groceries = {
// //     fruits : ["pear", "apple", "banana"],
// //     vegetables: ["tomatoes", "cucumber", "salad"],
// //     totalPrice : "35$",
// //     other : {
// //         paid : false,
// //         meansOfPayment : ["cash", "creditCard"]
// //     }
// // }

// // // function displayGroceries(){
// // //     console.log(groceries.fruits)
// // // }
// // // displayGroceries()

// // function cloneGroceries(){
// //     let user = client;
// //     let shopping = groceries;
// // }

// // EX 2
// // -------------------------------------------------
// // 1
// // let library = [
// //     {title : 'Nice one', author : 'Bob', alreadyRead : false},
// //     {title : 'the yellow dog', author : 'David', alreadyRead : true},
// //     {title : 'Blue & blue', author : 'Naomi', alreadyRead : true},
// // ]
// // for (let i = 0; i < library.length; i++) {
// //     if (library[i].alreadyRead) {
// //         console.log(`You already read ${library[i].title} by ${library[i].author}`); 
// //     } else {
// //         console.log(`You still need to read ${library[i].title} by ${library[i].author}`); 

// //     }
    
// // }
// // EX 3
// // -------------------------------------------------
// // 1
// const  myPenguins = {
//     name : 'roy',
//     character : 'roy and silo',
//     origin : 'And Tango Makes Three',
//     author : 'Peter Parnell'
// }
// console.log(`Hello, I'm a penguin and my name is ${myPenguins.character}`);
// myPenguins.canFly = false;
// myPenguins.chrip = function() {
//     console.log('CHIRP CHIRP! Is this what penguins sound like?');
// }
// // 6
// myPenguins.sayHello = function() {
//     console.log(`Hello, I'm a penguin and my name is ${myPenguins.character}`);
// }
// // console.log(myPenguins);
// myPenguins.sayHello();
// // 7
// myPenguins.character =  "Penguin McPenguinFace";
// myPenguins.sayHello();
// // 8
// myPenguins.fly = function (){
//     if (myPenguins.canFly) {
//        console.log('I can fly'); 
//     } else {
//         console.log('no fly for me');
//     }
// }
// myPenguins.fly();

// // myPenguins.test = function(){
// //         console.log(Object.keys(myPenguins));
// // }

// // myPenguins.test();

// function test (object){
//     console.log('here is the keys:');
//     for (const keys in object) {
//         console.log(`${keys}:  ${object[keys]}`);
        
//     }
// }
// test(myPenguins);

// // EX 4
// // 1
// myPenguins.favoriteFoods = ['Fish', 'Ice cream', 'Banana'];
// console.log(`favorite Food: ${myPenguins.favoriteFoods[1]}`);
// //  3 - 5
// let firstFavFood = myPenguins.favoriteFoods[0];
// myPenguins.favoriteFoods.push('apples');
// console.log(myPenguins.favoriteFoods.length);
// // 6
// myPenguins.favoriteFoods[-1] = 'pineapples';
// // 7
// let lastFavFood = myPenguins.favoriteFoods[-1];
// console.log(lastFavFood);
// // 8

// function printTest (object){
//     console.log('here is the keys:');
//     for (const array in object) {
//         console.log(`${array}:  ${object[array]}`);
        
//     }
// }
// printTest(myPenguins);
// // EX 5
// const gunter = {
//     name: "Gunter",
//     origin: "Adventure Time",
//     canFly: false,
//     sayHello: function () {
//       console.log("QUACK!!!");
//     },
//   };
  
// const ramon = {
//     name: "Ramón",
//     origin: "Happy Feet",
//     canFly: true,
//     sayHello: function () {
//       console.log("Estoy encantado de conocerle.");
//     },
//   };
  
//   const fred = {
//     name: "Fred",
//     origin: "Sitting Ducks",
//     canFly: false,
//     sayHello: function () {
//       console.log("Hi there!");
//     },
//   };
  
// //   1
// let penguins = [gunter, fred, ramon];
// console.log(penguins[0]);

// // 3
// let secondPenguin = penguins[1];
// // 4
// console.log(penguins[penguins.length - 1].name);
// // 5
// penguins.push(myPenguins);
// // 6
// console.log(penguins.length);
// // 7
// penguins[0].canFly = true;
// console.log(penguins[0]);
// // 8
// penguins[0].sayHello();
// // 9
// function penguinName(array){
//     for (let i = 0; i < array.length; i++) {
//         console.log(penguins[i].name);
        
//     }
// }
// penguinName(penguins);
// // 10
// function penguinHello(array){
//     for (let i = 0; i < array.length; i++) {
//         penguins[i].sayHello();
        
//     }
// }
// penguinHello(penguins);
// // 11
// function penguinAdd(array){
//     for (let i = 0; i < array.length; i++) {
//         penguins[i].numberOfFeet = 2;
        
//     }
// }
// penguinAdd(penguins);
// console.log(penguins);
// // 12
// function isFlying(array){
//     for (let i = 0; i < array.length; i++) {
//         if (penguins[i].canFly) {
//             console.log(`${penguins[i].name} Can fly`);
//         }
        
//     }
// }
//  isFlying(penguins);

// //  EX6----------------------------------------
// // allready done.

// // EX7
const mySchool = {
    name : 'Moveo BootCamp',
    location : 'allenby, tel aviv',
    students : [
        {name : 'dror', age : 20, grade : 5, classes : ['JS', 'Logics', 'CSS']},
        {name : 'Ben', age : 15, grade : 3, classes : ['HTML','Alguritmic']},
        {name : 'Yossi', age : 15, grade : 3, classes : ['chemistry','Alguritmic']},
    ],
    teachers : [
        {name : 'Roti', subject : 'JavaStript', gradeLevels :[4, 5, 6] , classes : ['JS', 'HTML', 'CSS']},
        {name : 'Lili', subject : 'HTML', gradeLevels :[2, 3] , classes : ['Logics','Alguritmic' ]},

    ],

}
function classesMatch(name1, name2) {
    for (let i = 0; i < mySchool.students.length; i++) {
      if (mySchool.students[i].name === name1) {
        for (let j = 0; j < mySchool.teachers.length; j++) {
            if (mySchool.teachers[j].name === name2) {
                for (let q = 0; q < mySchool.students[i].classes.length; q++) {
                     for (let z = 0; z < mySchool.teachers[j].classes.length; z++) {
                         if (mySchool.students[i].classes[q] === mySchool.teachers[j].classes[z]) {
                           console.log('same classes');
                              return true;
                }
              }
            }
          }
        }
      }
    }
    console.log('different classes');
  }
  
  classesMatch('dror', 'Roti');
  
// function classesMatch(name1, name2) {
//     for (let i = 0; i < mySchool.students.length; i++) {
//         if (mySchool.students[i].name === name1) {
//             for (let j = 0; j < mySchool.students[i].classes.length; j++) {
//                 for (let q = 0; q < mySchool.teachers.length; q++) {
//                     if (mySchool.teachers[q].name === name2) {
//                         for (let z = 0; z < mySchool.teachers[q].classes.length; z++) {
//                             if (mySchool.students[i].classes[j]===mySchool.teachers[q].classes[z]) {
//                                 console.log('same classes');
//                                 return true;
//                             } 
                            
                            
                            
//                         }
//                     }
                    
//                 }
                
//             }
            
//         }
        
//     }
//     console.log('differnt classes');
//     return false;
// }
// function classesMatch('Yossi', 'Roti');

// EX 8
// const library = {
//     name: "Springfield Public Library",
//     location: "Springfield",
//     books: [
//       {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         year: 1925,
//         genre: "Novel",
//         publisher: "Charles Scribner's Sons",
//         pages: 180,
//         isbn: "978-0-7432-6555-2",
//     },
//       {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         year: 1960,
//         genre: "Novel",
//         publisher: "J.B. Lippincott & Co.",
//         pages: 281,
//         isbn: "978-0-044-93349-2",
//       },
//       {
//         title: "The Catcher in the Rye",
//         author: "J.D. Salinger",
//         year: 1951,
//         genre: "Novel",
//         publisher: "Little, Brown and Company",
//         pages: 214,
//         isbn: "978-0-316-76953-3",
//       },
//       {
//         title: "Pride and Prejudice",
//         author: "Jane Austen",
//         year: 1813,
//         genre: "Novel",
//         publisher: "T. Egerton",
//         pages: 279,
//         isbn: "978-0-141-19031-4",
//     },
//     ],
//   };
 
//   function titleByGenre(genre){
//       for (let i = 0; i < library.books.length; i++){
//         if (library.books[i].genre === genre) {
//             console.log(library.books[i].title);
//         }
//       }

//   }
//   titleByGenre("Novel")


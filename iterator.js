var users = [
    { username : 'larry' ,
    email : 'larry@foo.com' ,
    yearsExperience : 22.1,
    favoriteLanguages : [ 'Perl' , 'Java' , 'C++' ],
    favoriteEditor : 'Vim' ,
    hobbies : [ 'Fishing' , 'Sailing' , 'Hiking' ],
    hometown : {
    city : 'San Francisco' ,
    state : 'CA'
            }
        },
    
    { username : 'jane' ,
    email : 'jane@test.com' ,
    yearsExperience : 33.9,
    favoriteLanguages : [ 'Haskell' , 'Clojure' , 'PHP' ],
    favoriteEditor : 'Emacs' ,
    hobbies : [ 'Swimming' , 'Biking' , 'Hiking' ],
    hometown : {
    city : 'New York' ,
    state : 'NY'
            }
        },
    { username : 'sam' ,
    email : 'sam@test.com' ,
    yearsExperience : 8.2,
    favoriteLanguages : [ 'JavaScript' , 'Ruby' , 'Python' , 'Go' ],
    favoriteEditor : 'Atom' ,
    hobbies : [ 'Golf' , 'Cooking' , 'Archery' ],
    hometown : {
    city : 'Fargo' ,
    state : 'SD'
            }
        },
    { username : 'anne' ,
    email : 'anne@test.com' ,
    yearsExperience : 4 ,
    favoriteLanguages : [ 'C#' , 'C++' , 'F#' ],
    favoriteEditor : 'Visual Studio Code' ,
    hobbies : [ 'Tennis' , 'Biking' , 'Archery' ],
    hometown : {
    city : 'Albany' ,
    state : 'NY'
            }
        },
    { username : 'david' ,
    email : 'david@test.com' ,
    yearsExperience : 12.5,
    favoriteLanguages : [ 'JavaScript' , 'C#' , 'Swift' ],
    favoriteEditor : 'VS Code' ,
    hobbies : [ 'Volunteering' , 'Biking' , 'Coding' ],
    hometown : {
    city : 'Los Angeles' ,
    state : 'CA'
            }
        }
    ];

    // Answers:
    // i. Write a function called printEmails which console.log's each email for the
    // users.

    const printEmails = users.forEach(function(user){
        console.log(user.email);
});

// Output:
// VM555:2 larry@foo.com
// VM555:2 jane@test.com
// VM555:2 sam@test.com
// VM555:2 anne@test.com
// VM555:2 david@test.com



// ii. Write a function called printHobbies which console.log's each hobby for each
// user.

const printHobbies = users.reduce(function(acc, current){
    return acc = acc.concat(current.hobbies)},[])
    .forEach(function(hobby){
    console.log(hobby);
})




// iii: Write a function called findHometownByState which returns the first user which
// has a hometown of the state that is passed in

function findHometownByState(state){
    return users.find(function(homeTowns){
    return homeTowns.hometown.state == state;
       })
    }


    // oUTPUT:
    // {username: "jane", email: "jane@test.com", yearsExperience: 33.9, favoriteLanguages: Array(3), favoriteEditor: "Emacs", …}
    // email: "jane@test.com"
    // favoriteEditor: "Emacs"
    // favoriteLanguages: (3) ["Haskell", "Clojure", "PHP"]
    // hobbies: (3) ["Swimming", "Biking", "Hiking"]
    // hometown: {city: "New York", state: "NY"}
    // username: "jane"
    // yearsExperience: 33.9
    // __proto__: Object



    // iv: Write a function called allLanguages which returns an array of all of the
    // unique values


    function allLanguages(){
        return users.reduce(function(total,amount){
         amount.favoriteLanguages
        .forEach(function(language){
        if(total.indexOf(language) === -1){
        total.push(language);
        }
        });
        return total;
        },[])
        }


    //  v: Write a function called allLanguages which returns an array of all of the
    //  unique values

     function hasFavoriteEditor(Editor){
        return users.some(function(users){
        return users.favoriteEditor == Editor
          })
        }

    


    // vi: Write a function called hasFavoriteEditor which returns a boolean if any of
    // the users have the editor passed in

    function findByUsername(username){
        return users.find(function(users){
            return users.username == username;
        })
    }


    // Part II:
    // i: Write a function called vowelCount that accepts a string and returns an object
    // with each key being the vowel and the value being the number of times the
    // vowel occurs in the string (the order of keys in the object does not matter).


     function allLanguages(){
        return users.reduce((total,amount)=>{
        amount.favoriteLanguages.forEach(language=>{
        if(total.indexOf(language) === -1){
        total.push(language);
        }
        });
        return total;
        },[])
    }



        // ii: Write a function called removeVowels that accepts a string and returns an
        // array of each character that is not a vowel (y should not count as a vowel for
        // this function).
        
        function vowelCount(str){
            let vowels = ['a','e','i','o','u'];
            return str.split('').reduce(function(obj,val,index){
            if (vowels.indexOf(val)>-1){
            obj[val] = (obj[val] || 0) + 1;
            }
            return obj;
            },{});
            }
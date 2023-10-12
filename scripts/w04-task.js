/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProject = {
    name: 'Sam',
    photo: "images/myimage.jpg",
    favoriteFoods: [
        'Doner',
        'Pizza',
        'Burritto',
        'Steak',
        'Root Beer'
    ],
    hobbies: [
        'Coding',
        'Designing',
        'Volleyball',
        'Listening to music',
        'Biking in the mountains',
        'watch movies'
    ]
};  

/* Populate Profile Object with placesLive objects */
myProject ['placesLived'] = ([
    {
        place: 'Ankara, Turkey ',
        length: '4 years'
    },
    {
        place: 'Bolu, Turkey',
        length: '8 years'
    },
    {
        place: 'Kastamonu, Turkey',
        length: 'less than 2 years'
    },
    {
        place: 'Kermanshah, Iran',
        length: '5 years'

    },
    {
        place: 'Mazandaran, Iran',
        length: '4 years'
    }
]
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProject.name;

/* Photo with attributes */
document.querySelector ('#photo').src = myProject.photo;

/* Favorite Foods List*/
myProject.favoriteFoods.forEach(function (food){
    let newLiElement = document.createElement ('li');
    newLiElement.textContent = food;
    document.querySelector('#favorite-foods').appendChild (newLiElement);
});

/* Hobbies List */
myProject.hobbies.forEach( function (hobby) {
    let newliElement2 = document.createElement('li');
    newliElement2.textContent = hobby;
    document.querySelector('#hobbies').appendChild (newliElement2)
})

/* Places Lived DataList */
function placesLivedLayout (placesLivedArray) {
    const placesLength = placesLivedArray.map ((pL) => 
        `<dt><b>${pL.place}</b></dt>
        <dd><sup><small>${pL.length}</small></sup></dd>`
    );
    document.querySelector('#places-lived').innerHTML = placesLength.join("");
};

//let element = document.querySelector('');
//element.style.color = 'red';

placesLivedLayout (myProject.placesLived);
const reviews = [
    {
        id: 1,
        name: "Sara Jones",
        job: "UX Designer",
        img: 
        "./img/girl1.jpg",
        text:
        "Sara had spent year and year accumulating the information. He knew it inside out and if there was ever anyone looking for an expert in the field, Josh would be the one to call. The problem was that there was nobody interested in the information besides him and he knew it. Years of information painstakingly memorized and sorted with not a sole giving even an ounce of interest in the topic."
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "web designer",
        img:
        "./img/girl2.jpg",
        text:
        "The bush began to shake. Brad couldn't see what was causing it to shake, but he didn't care. he had a pretty good idea about what was going on and what was happening. He was so confident that he approached the bush carefree and with a smile on his face. That all changed the instant he realized what was actually behind the bush.",

    },
    {
        id: 3,
        name: "John Diaz",
        job: "software developer",
        img:
        "./img/girl3.jpg",
        text: 
        "Her breath exited her mouth in big puffs as if she were smoking a cigarette. The morning dew had made her clothes damp and she shivered from the chill in the air. There was only one thing that could get her up and out this early in the morning.",

    }
];

// select items

const img = document.getElementById("theImage");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item which is 0

let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function(){
   showPerson(currentItem);
    
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    };


    showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
    currentItem--;

    if(currentItem < 0 ){
        currentItem = reviews.length - 1;
    };

    showPerson(currentItem);
});

randomBtn.addEventListener("click", function(){
    const randomNum = Math.floor(Math.random() * reviews.length);
    showPerson(randomNum);
});

let text = document.querySelector("#text");
let emoji = document.querySelector("#emoji");
let star=document.querySelectorAll("span");
console.log(star);
function number(e){

        text.innerText=rating[e-1].text1;
        emoji.innerText=rating[e-1].emoji;
         for(i=0;i<e;i++){
            star[i].classList="color";
         }
         for(i=e;i<5;i++){
            star[i].classList="";
         }
};


const rating=[
    {
      'emoji':'😒',
      'text1':'Worst',
    },
    {
        'emoji':'😑',
        'text1':'Bad',
      },
      {
        'emoji':'🙂',
        'text1':'Average',
      },
      {
        'emoji':'😝',
        'text1':'Good',
      },
      {
        'emoji':'🤩',
        'text1':'Loved it',
      }
];

 
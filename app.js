const correctAnswers = ['A', 'C', 'C', 'B'];
const form = document.querySelector('.quiz-form');
const button = document.querySelector('submit');
const result = document.querySelector('.result');

form.addEventListener('submit', e =>{
  e.preventDefault();

  let score = 0;
  
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers

  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25;
    }


  });

// score showing 
    scrollTo(0,0);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
    result.querySelector('span').textContent = `${(Math.round(output))}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
    },1);
    
      


    // let output = 0;
    // const timer = setInterval(() => {
    //   r
    //   if(parseFloat(output).toFixed(2) === parseFloat(score).toFixed(2) || output>=100){
    //     clearInterval(timer);
    //   } else {
    //     output=output+1;
    //   }
    // }, 1);
});



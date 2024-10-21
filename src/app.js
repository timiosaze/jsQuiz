let selectedQuestions = [];
let questionsArray = [];
let question;
//Shuffle the questions array to get five different questions
function shuffle(){
    for(let i = 0; questionsArray.length<5; i++){
        let question = Math.floor(Math.random() * 10) + 1;
        if(!questionsArray.includes(question)){
            questionsArray.push(question);
        }
    }
    // console.log(questionsArray);
    for (let i of questionsArray){
        selectedQuestions.push(questions[i]);
    }
    // console.log(selectedQuestions);
}
shuffle();
//Populate the HTML with the randoms Questions
for (let index = 0; index < selectedQuestions.length; index++) {
    // console.log(selectedQuestions[index]);
    let question_no = index+1;
    let eachQuestionHtml = '';
    optionAHtml = '';
    optionBHtml = '';
    optionCHtml = '';
    optionDHtml = '';
    optionAHtml = '<div class="flex items-center mb-4"><input id="" type="radio" name="option['+ index +']" value="'+ selectedQuestions[index].option_a +'" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 option_'+index+'"><label for="option_a" class="option_a block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">'+ selectedQuestions[index].option_a +'</label></div>';
    optionBHtml = '<div class="flex items-center mb-4"><input id="" type="radio" name="option['+ index +']" value="'+ selectedQuestions[index].option_b +'" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 option_'+index+'"><label for="option_b" class="option_b block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">'+ selectedQuestions[index].option_b +'</label></div>';
    optionCHtml = '<div class="flex items-center mb-4"><input id="" type="radio" name="option['+ index +']" value="'+ selectedQuestions[index].option_c +'" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600  option_'+index+'"><label for="option_c" class="option_c block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">'+ selectedQuestions[index].option_c +'</label></div>';
    optionDHtml = '<div class="flex items-center mb-4"><input id="" type="radio" name="option['+ index +']" value="'+ selectedQuestions[index].option_d +'" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600 option_'+index+'"><label for="option_d" class="option_d block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">'+ selectedQuestions[index].option_d +'</label></div>';
    eachQuestionHtml += '<fieldset class="mt-10"><h1 class="question_number mb-4 font-bold">Question '+ question_no +'</h1><h2 class="question mb-4">'+ selectedQuestions[index].question +'"</h2>' + optionAHtml + optionBHtml + optionCHtml + optionDHtml +'</fieldset>'
    document.getElementById('eachQuestion').innerHTML += eachQuestionHtml;
}
//Calculate the user score in the Quiz

function getValues(){
    let correctAnswers = 0;
    for (let index = 0; index < 5; index++) {
        let option = 'option[' + index + ']';
        let optionArray = document.getElementsByName(option);
        for(let i = 0; i < 4; i++){
            if(optionArray[i].checked){
                if(optionArray[i].value == selectedQuestions[index].answer){
                    correctAnswers++;
                } else {
                    
                }
            }
        }
    }
    localStorage.setItem("score", correctAnswers);
}

const heritage_btn = document.getElementById('heritage_btn')
const arrow = document.getElementById('arrow')
var open_page = document.getElementById('open_page')
var questio22 = document.getElementById('questio22')
const questions_container = document.getElementById('ques_ctnr')
var question_name = document.getElementById('question')
var answer_options = document.getElementById('buttons')
var list_choices = Array.from(answer_options.querySelectorAll("span"))
var radio_btns = Array.from(document.querySelectorAll('input'))
var result_board = document.getElementById('result_board')
var final_score= document.getElementById('result')

var container = document.getElementById('container')
var submit_check = document.getElementById('submit_btn')
var score_p = document.getElementById('score') 
var qn_num = document.getElementById('qn_num')
var actualnode =0
var question_index = 0;
var previous = 0;
var highlighted = 0;
var score = 0;
var actual_result = 0


heritage_btn.addEventListener('click',timerftn)

function timerftn(){
    setTimeout(heritage_quiz, 500)
}

function heritage_quiz(){
    open_page.classList.add('hide')
    setInterval(questio22.classList.remove('hide'), 1000)
    heritage_btn.style.height = '20%'
    
    questions_container.style.display = "block"
    questions_container.style.height = '80%'
    score_p.style.display = 'block'
    arrow.style.display = 'block'
    qn_num.style.display = 'block'
    score_p.innerHTML += 0
    arrow.style.width = '10%'
    
    // setTimeout(setquestion, 1000, question_index)
    setquestion(question_index);
    qn_num.innerHTML = "Question "
    qn_num.innerHTML += question_index+1
    qn_num.innerHTML += " of 5"
    score_p.innerHTML = "Score : "
    score_p.innerHTML += score
    
}

function setquestion(question_index){
    actual_result = questions[question_index].coct_ans
    for (i = 0; i < radio_btns.length;i++){
        const sahithi = radio_btns[i].parentElement 
        sahithi.classList.remove('correct')
        sahithi.classList.remove('wrong')
        radio_btns[i].checked = false 
        sahithi.style.backgroundColor =''
    }
    arrow.style.opacity = "1"
    answer_options.style.pointerEvents = 'auto'
    const index = question_index
    question_name.innerHTML = questions[index].question;
    questions[index].answers.forEach(element => {
        var choice_index = questions[index].answers.indexOf(element)
        list_choices[choice_index].innerHTML = element 
    })
    
    actual_result = questions[question_index].coct_ans
    
    console.log(actual_result)
    questions[index].answers.forEach(element => {
        console.log(element)
        if (actual_result === element) {
            var choice_index = questions[index].answers.indexOf(element)
            actualnode = list_choices[choice_index].parentElement
        }
    }) 
    submit_check.addEventListener('click', checkanswer)
    return actualnode
}

function checkanswer(){ 
    var selected_tesult = 0 
    submit_check.removeEventListener('click', checkanswer)
    for (i = 0; i < radio_btns.length;i++){
        const sahithi = radio_btns[i].parentElement 
        sahithi.classList.remove('correct')
        sahithi.classList.remove('wrong')
        if (radio_btns[i].checked == true){
            selected_tesult = sahithi.querySelector('span').innerHTML
            answer_options.style.pointerEvents = 'none'
            if (selected_tesult === actual_result){
               sahithi.classList.add('correct');
               sahithi.classList.remove('wrong');
               score = score+1
            score_p.innerHTML = "Score : "
            score_p.innerHTML += score
            }
            else{
                sahithi.classList.add('wrong');
                sahithi.classList.remove('correct');  
                actualnode.style.backgroundColor = "rgb(0,150,0)";
               actualnode.style['-ms-transition'] = 'backgroundColor 1s';
            }
        } 
    }  
    next()   
}
function next(){
    arrow.addEventListener('click',handler)
}

function handler(){
    arrow.removeEventListener('click', handler) 
    heritage_btn.removeEventListener('click',heritage_quiz)
    console.log(question_index++)
    if (question_index < 5){
    qn_num.innerHTML = 'Question '
    qn_num.innerHTML += question_index+1
    qn_num.innerHTML += " of 5"
    setquestion(question_index)
    }   
    else{
        questio22.classList.add('hide')
        result_board.classList.remove('hide') 
        container.classList.add('hide')
        arrow.style.display = "none"
        final_score.innerHTML = "Final Score : "
        final_score.innerHTML += score
        container.style.height ='auto'
        result_board.lastElementChild.addEventListener('click',reset_quiz)
    }       
}

function reset_quiz(){
    score = 0
    question_index = 0
    result_board.classList.add('hide')
    open_page.classList.remove('hide')
    heritage_btn.addEventListener('click',heritage_quiz)
}

var questions = [
    {
    question : 'Which IIT had support from Federal Republic of Germany during its Establishment?',
    answers : ['IIT Roorkee','IIT Powai','IIT Madras','IIT Delhi'],
    coct_ans : 'IIT Madras'
    },
    {
    question : 'This IIT is the largest in area as well as number of courses offered at the undergraduate level. Which of these is it?',
    answers : ['IIT Delhi','IIT Kharagpur','IIT Roorkee','IIT Powai'],
    coct_ans : 'IIT Kharagpur'
    },
    {
        question : 'Which of the following IIT is known as IIT Powai?',
        answers : ['IIT Jaipur','IIT Roorkee','IIT Guwahati','IIT Bombay'],
        coct_ans : 'IIT Bombay'
        },
    {
        question : 'Which IIT was the first to introduce computer science in the undergraduate curriculum?',
        answers : ['IIT Kanpur','IIT Delhi','IIT Jaipur','IIT Powai'],
        coct_ans : 'IIT Kanpur'
        },
        
        {
            question :'Which is the oldest IIT?',
            answers : ['IIT Madras','IIT Roorkee','IIT Khargpur','IIT Bombay'],
            coct_ans : 'IIT Roorkee'
        }
]



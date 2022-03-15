console.log("Moodle+ successfully loaded!");
const login_element = document.getElementById("login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;
let question=login_text.split('\n')[3]

let answer,calc; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

switch (question[7]) {
    case 's':
        calc=question.slice(16,-3).split(' - ')
        answer=calc[0]-calc[1]
        break;
    case 'a':
        calc=question.slice(11,-3).split(' + ')
        answer=Number(calc[0])+Number(calc[1])
        break;
    case 'e':
        calc=question.slice(24,-3).split(' , ')
        if (question[13]=='f') answer=calc[0]
        else answer=calc[1]
        break;

    default:
        break;
}

const captcha_input_element = document.querySelector('input#valuepkg3'); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
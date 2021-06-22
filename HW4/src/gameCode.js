//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok, eventNum;

var answers = [];

do {//Выводим первый вопрос
    ok = false;
    eventNum = 0;
    event = +prompt(createEventText(eventNum));

    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works[eventNum].answerCount, event, eventNum);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            eventNum = 1;
            event = +prompt(createEventText(eventNum));
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works[eventNum].answerCount, event, eventNum);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    eventNum = 3;
                    event = +prompt(createEventText(eventNum));
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works[eventNum].answerCount, event, eventNum);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    eventNum = 3;
                    event = +prompt(createEventText(eventNum));
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works[eventNum].answerCount, event, eventNum);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            eventNum = 2;
            event = +prompt(createEventText(eventNum));
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works[eventNum].answerCount, event, eventNum);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    eventNum = 3;
                    event = +prompt(createEventText(eventNum));
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works[eventNum].answerCount, event, eventNum);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    eventNum = 3;
                    event = +prompt(createEventText(eventNum));
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works[eventNum].answerCount, event, eventNum);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
messageText = '';
for (let i = 0; i < answers.length; i++) {
    messageText += "Вопрос:" + "\n" + works[answers[i].numEvent].questiontext + "\n" + "Ваш ответ: " + works[answers[i].numEvent].answers[answers[i].answer - 1] + "\n";
}
alert(messageText);
console.log(answers);

//------------------------------------------
function isAnswer(q, event, qText) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    answers.push({
        numEvent: qText,
        answer: event
    });
    return true;

}
function createEventText(numEvent) {
    let promtText = works[numEvent].questiontext;
    for (let i = 0; i < works[numEvent].answerCount; i++) {
        promtText += works[numEvent].answers[i];
    }
    promtText += '-1 - Выход из игры';
    return promtText;
}


function addRule() {
    const rule = "<div class=\"rules\">\n" +
        "                <input type=\"text\" class=\"left-rule rule\" value=\"0\">\n" +
        "                <input type=\"text\" class=\"right-rule rule\" value=\"0\">\n" +
        "            </div>";
    let root = document.getElementById('rule-list');
    let fakeRoot = document.createElement("div");
    fakeRoot.innerHTML = rule.trim();

    root.appendChild(fakeRoot);
}

function getRule() {
    let leftRules = document.getElementsByClassName('left-rule');
    let rightRules = document.getElementsByClassName('right-rule');
    let result = [];

    for(let i = 0; i <= leftRules.length - 1; i++) {
        let setRules = [
            leftRules[i].value, rightRules[i].value
        ]; result.push(setRules);
    }

    if (result.length == 0) {
        alert('You not enter your rules! Try again!');
        return 'STOP'
    } else return result
}

function getExample() {
    const input = document.getElementsByClassName('input-example')[0].value;
    if (input == '') {
        alert('You not enter your example! Try again!');
        return 'STOP'
    } else return input
}

function inputExample(result) {
    const answerBord = document.getElementById('answer');
    result = result.join(' -> ')
    answerBord.innerHTML = result;
}
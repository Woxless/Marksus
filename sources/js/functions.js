function indexMap(example, rules) {
    let ruleLength = rules.length - 1;
    let result = [];

    for(let i = 0; i <= ruleLength; i++) {
        if (example.indexOf(rules[i][0]) != -1) {
            result.push(i);
        }
    }

    return result
}

function marksus() {
    let example = getExample();
    let rules = getRule();

    if(example == 'STOP' || rules == 'STOP') {
        return ['Error of calculation']
    } else {
        let old = '';
        let result = [example];
        let count = 0;
        example = '*' + example + '*';

        while(indexMap(example, rules).length != 0) {
            if (example == old || result[result.length - 1] == '' || count > 100) break;
            let indexes = indexMap(example, rules);

            old = example;
            example = '*' + example.replace(
              rules[indexes[0]][0], rules[indexes[0]][1].replace('.', '')
            ) + '*'; let pusher = example.replace(/\*/g, '');
            result.push(pusher);

            if (rules[indexes[0]][1].indexOf('.') != -1) break;
            count++;
        }

        inputExample(result);
    }
}
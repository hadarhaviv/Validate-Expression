let exp = document.getElementById("exp");
let result = document.getElementById("result");

function validateString(str) {
    let charsArray = str.split('');
    let tempArray = []
    for (let i = 0; i < charsArray.length; i++) {
        if (charsArray[i] == "[" || charsArray[i] == "(" || charsArray[i] == "{") {
            tempArray.push(charsArray[i]);
        }
        else {
            let char = tempArray.pop();
            switch (charsArray[i]) {
                case "]":
                    if (char == "[") {
                        break;
                    }

                case "}":
                    if (char == "{") {
                        break;
                    }

                case ")":
                    if (char == "(") {
                        break;
                    }
                default:
                    return false;
            }
        }
    }
    return (tempArray == 0);

}

function validate() {
    let res = validateString(exp.value);
    result.innerHTML = res;

}
// @noImplicitAny: true

interface CorrectType { correctKey: string }
interface FaultyType { }

function dependOnPrior(prior: CorrectType): CorrectType;
function dependOnPrior(prior: FaultyType): FaultyType | CorrectType;
function dependOnPrior(prior: CorrectType | FaultyType): CorrectType | FaultyType {
    if ("correctKey" in prior) {
        return prior;
    }
    return prior;
}

function testCase(prior: CorrectType | FaultyType): CorrectType | FaultyType {
    if ("correctKey" in prior) {
        return prior;
    }

    for (let i = 0; i < 5; i++) {
        let temp = dependOnPrior(prior);

        if ("correctKey" in temp) {
            return temp;
        }
        prior = temp;
    }

    return prior;
}

import isEqual from 'lodash.isequal'

export const calculateScore = (questions, answers) => {
    let answer = null,
        score = Array.isArray(questions) && questions.reduce((acc, qs) => {
            answer = answers.find(ans => ans.questionId === qs.id)
            if (typeof answer?.answer !== "undefined" && isCorrect(answer?.answer, qs?.correct_answer)) {
                return acc + 1;
            } return acc;
        }, 0)
    return score;
}

export const isCorrect = (userAnswer, correctAnswer) => isEqual(userAnswer, correctAnswer);

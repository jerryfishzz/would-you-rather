export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UPDATE_OPTION = 'UPDATE_OPTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function updateOption({ authedUser, qid, answer }) {
  return {
    type: UPDATE_OPTION,
    authedUser,
    qid,
    answer
  }
}
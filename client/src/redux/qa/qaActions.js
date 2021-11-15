import axios from 'axios';
import { FETCH_QA_REQUEST } from './qaTypes';
import { FETCH_QA_SUCCESS } from './qaTypes';
import { FETCH_QA_FAILURE } from './qaTypes';

const fetchQARequest = () => {
  return {
    type: FETCH_QA_REQUEST
  }
}

const fetchQASuccess = items => {
  return {
    type: FETCH_QA_SUCCESS,
    payload: items
  }
}

const fetchQAFailure = error => {
  return {
    type: FETCH_QA_FAILURE,
    payload: error
  }
}

// fetch questions
export const fetchQA = (productId) => {
  return (dispatch) => {
    dispatch(fetchQARequest());
    axios.get(`/qa/questions/productId/${productId}?count=${Number.MAX_SAFE_INTEGER}`) // get max qa
      .then(qaList => {
        // sort questions by helpfulness (done)
        // TODO: sort answers by seller then helpfulness
        dispatch(fetchQASuccess(qaList.data.results));
      })
      .catch(err => {
        dispatch(fetchQAFailure(err.message));
      })
  }
};

// add question to a product id
// question {"body": "literally, whats been on your mind", "name": "alex", "email": "test@test.com", "product_id": 38323}
export const addQuestionToProduct = (question) => {
  return dispatch => {
    axios.post('/qa/questions', question)
      .then(res => {
        console.log(`Question to product #${question.product_id} is posted`);
        // TODO: should I fetch qaList again?
        // dispatch(fetchQA(question.product_id));
      })
      .catch(err => {
        console.error('Failed to post question:', question);
      })
  }
};

// add answer for a question id
// answer {"body": "thanks for asking. good question.", "name": "me, myself, and I", "email": "test@test.com", "photos": ["https://assets.entrepreneur.com/content/3x2/2000/20150824181921-meditate-yoga-relax-calm-zen.jpeg?auto=webp&quality=95&crop=16:9&width=675"]}
export const addAnswerToQuestion = (questionId, answer) => {
  return dispatch => {
    axios.post(`/qa/questions/${questionId}/answers`, answer)
      .then(res => {
        console.log(`Answer to question #${questionId} is posted`);
        // TODO: should I fetch qaList again?
      })
      .catch(err => {
        console.error('Failed to post answer:', answer);
      })
  }
}

// mark a question id as helpful
export const markQuestionHelpful = (questionId) => {
  return dispatch => {
    axios.put(`/qa/questions/${questionId}/helpful`)
      .then(res => {
        // TODO: should I fetch qaList again?
        console.log(`Questions #${questionId} is marked helpful`);
      })
      .catch(err => {
        console.error(err);
      })

  }
}

// reqort a question id
export const reportQuestion = (questionId) => {
  return dispatch => {
    axios.put(`/qa/questions/${questionId}/report`)
      .then(res => {
        // TODO: should I fetch qaList again?
        console.log(`Questions #${questionId} is reported`);
      })
      .catch(err => {
        console.error(err);
      })

  }
}

/* 
* no need to implement the followings:
* mark answer id as helpful
* report answer id
*/


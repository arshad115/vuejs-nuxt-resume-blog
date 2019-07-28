import Api from './api'
export default {
  getResume(){
    return Api().get('resume.json');
  }
}

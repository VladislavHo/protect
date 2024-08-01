
import { makeAutoObservable } from "mobx"

class StateHeader {

  activeGreenColor = false;

  constructor(){
    makeAutoObservable(this)
  }


  changeOnDarkPosition(state){
    this.activeGreenColor = state
  }


}


export default new StateHeader()
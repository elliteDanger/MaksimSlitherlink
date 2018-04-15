import {Container} from 'flux/utils'
import ProblemsView from '../views/ProblemsView'
import GameDataStore from '../data/GameDataStore'
import ProblemStore from '../data/ProblemStore'

function getStores() {
  return [
    ProblemStore,
    GameDataStore,
  ]
}

function getState() {
  return {
    problems: ProblemStore.getState(),
    // toolName: GameDataStore.getState(),
  }
}

export default Container.createFunctional(ProblemsView, getStores, getState)

import { Router } from './routes/Router'
import { GlobalContext } from './global/GlobalContext'
import { GlobalState } from './global/GlobalState'
import { Modal } from './components/modal/Modal'


function App() {
  const context = GlobalState()

  return (
    <>
      <GlobalContext.Provider value={context}>
        {context.modal && <Modal/> }
        <Router />
      </GlobalContext.Provider>
    </>
  )
}

export default App

import { Link } from 'react-router-dom'
import useUser from 'host/hooks/useUser'
import abilities from 'host/abilities'
import AbilityContext from 'host/contexts/AbilityContext'
import ButtonNav from './components/ButtonNav'

const App = () => {
  const user = useUser()

  return (
    <AbilityContext.Provider value={abilities}>
      <div>
        <h1>REMOTE 1</h1>
        {
          user &&
          <p>User: {user.name}</p>
        }
        <ButtonNav />
        <Link to="/app2">App2</Link>
      </div>
    </AbilityContext.Provider>
  )
}

export default App

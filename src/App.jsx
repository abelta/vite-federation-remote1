import useUser from 'host/hooks/useUser'
// import useAbilities from 'host/hooks/useAbilities'
import abilities from 'host/abilities'
import AbilityContext from 'host/contexts/AbilityContext'
import ButtonNav from './components/ButtonNav'

const App = () => {
  const user = useUser()
  // const abilities = useAbilities()

  // console.log('REMOTE1', abilities.rules)

  return (
    <AbilityContext.Provider value={abilities}>
      <div>
        <h1>REMOTE 1</h1>
        {
          user &&
          <p>User: {user.name}</p>
        }
        <ButtonNav />
      </div>
    </AbilityContext.Provider>
  )
}

export default App

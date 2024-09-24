import Can from 'host/components/Can'
import useAbilities from 'host/hooks/useAbilities'

const ButtonNav = () => {
  const abilities = useAbilities()
  console.log('BUTTON NAV', abilities.rules)

  return (
      <nav>
        <Can I="read" a="post">
          <a href="/posts">Posts</a>
        </Can>
        <Can I="write" a="post">
          <button>WRITE POST</button>
        </Can>
      </nav>
  )
}

export default ButtonNav

import Can from 'host/components/Can'

const ButtonNav = () => {
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

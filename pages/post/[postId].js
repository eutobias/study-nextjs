import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Router from 'next/router'

const Post = props => {
  // const router = useRouter();
  if (!props.post) 
    return <div />

  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <Link href='/posts'>
        <a>Back to posts</a>
      </Link>
    </div>
  )
}

Post.getInitialProps = async function ( props ) {
  const id =
    props.query && props.query.postId && props.query.postId.split('|')[1]

  if (!id) {
    return {}
  }

  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  const data = await res.json()

  return {
    post: data
  }
}

export default Post

import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import {slugify} from '../helpers/functions'

const Posts = props => {
  return (
    <div>
      <h1>Posts</h1>
      <Link href='/'>Home</Link>

      <ul>
        {props.posts.map((v, i) => {
          return (
            <li key={i}>
              <Link href="/post/[postId]" as={`/post/${slugify(v.title)}|${v.id}`}><a>{v.title}</a></Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Posts.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return {
    posts: data
  }
}

export default Posts

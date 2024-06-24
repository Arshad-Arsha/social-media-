import './home.css'

// Compoents...............
import AddPost from '../../components/addPost/addPost.jsx'
import Feeds from '../../components/feeds/Feeds.jsx'
import Stories from '../../components/stories/Stories.jsx'




export default function Home() {
  return (
    <>
    <Stories />
    <AddPost />
    <Feeds/>
    </>
  )
}

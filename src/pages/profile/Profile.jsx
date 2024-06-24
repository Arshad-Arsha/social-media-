//components..........

import UserProfile from "../../components/userProfile/UserProfile";
import AddPost from "../../components/addPost/addPost";
import Feeds from  "../../components/feeds/Feeds"


export default function Profile() {
  return (
    <>
      <UserProfile/>
      <AddPost />
      <Feeds/>
    </>
  )
}

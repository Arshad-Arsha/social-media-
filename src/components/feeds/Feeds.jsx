import './feeds.css'

//componets............
import Feed from './Feed'

//fack api .........
import HomeFeedData from '../../FackApis/HomeFeedData'

export default function Feeds() {
  return (
    <div className='feeds'>
        {
          HomeFeedData.map(fed=>(
            <Feed fed={fed} key={fed.key} />

          ))
        }
    </div>
  )
}

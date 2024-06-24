import  './Stories.css'

//FackApis ...............
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
// //FackApis ...............
import StoriesData from '../../FackApis/StoriesData'

// // Compoents...............
import UserStories from './UserStories'

export default function Stories() {
  return (
    <div className='stories'>
        <UserStories />
        <Swiper style={{width:"80%"}}
        slidesPerView={4}
        spaceBetween={10} >
            {
                StoriesData.map(story =>(
                    <SwiperSlide>
                        <div className='story' key={Stories.id}>
                            <div className='user'>
                                <img src={story.storyProfile} alt='' />
                            </div>
                              <img src={story.story} alt='' />
                              <h5>{story.name}</h5>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

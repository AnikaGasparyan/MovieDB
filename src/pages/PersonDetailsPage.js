import React, { useMemo } from 'react'
import { LoadingScreen } from '../components/loader/loader.component';
import { useDetails } from '../hooks/use-details.hook';
import { Carousel } from "../components/carousel/carousel.component";
import { useRecommendations } from '../hooks/use-recommendations.hook';
import './page.css'
import dayjs from "dayjs";


export const PersonDetailsPage = ({ match }) => {
    console.log(match)
    const id = match.params.id;

    const peopleUrl = `person/${id}/combined_credits`;
    
    const {
        recomList: { cast = [], crew = [] },
      } = useRecommendations(peopleUrl);

    const {details, isLoading: loadingDetails} = useDetails(id,'person');
    console.log(details)

    let {
        profile_path,
        biography,
        birthday,
        name,
        known_for_department,
        popularity
    } = details;

    if (popularity >= 10) {
        popularity = 10;
    }

    const carouselData= useMemo(()=>{
        return [...cast, ...crew].map((movie)=>{
            return {
                ...movie, 
                mediaType: movie.media_type
            };
        });
    },[crew, cast]);
    
    return (
       <>
            {loadingDetails ? <LoadingScreen /> :
                <>
                <div className='details-container'>
                    <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt='poster' width='250px' />
                    <div className='detailed-card'>

                        <h2>{`${name} (${ dayjs(birthday).format('DD, MMM YYYY')})`}</h2>
                        {known_for_department &&
                            <div>
                                {known_for_department}
                            </div>
                        }

                        <h2>{popularity + '/10'}</h2>

                        <div className='detail-overview'>
                            <span> {'BIOGRAPHY'}</span>
                            <br />
                            {biography}
                        </div>

                    </div>

                </div>
                <div>
                    <h1>You might be interested</h1>
                    <Carousel items={carouselData} />
                </div>
            
            </>
            }
                
        </>
        
    )
}
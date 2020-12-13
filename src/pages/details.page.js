import React from 'react'
import { LoadingScreen } from '../components/loader/loader.component';
import { useDetails } from '../hooks/use-details.hook';
import { Carousel } from "../components/carousel/carousel.component";
import { useRecommendations } from '../hooks/use-recommendations.hook';
import './page.css'
import dayjs from "dayjs";
import { Banner } from '../components/banner/banner.component';
import {useVideoKey} from '../hooks/use-video-key.hook'

export const DetailsPage = ({ match }) => {
    const mediaType = match.params.mediaType;
    const id = match.params.id;

    const mediaUrl = `${mediaType}/${id}/similar`;
    const peopleUrl = `${mediaType}/${id}/tagged_images`;
    const knownFor = useRecommendations(peopleUrl);
    const similar = useRecommendations(mediaUrl);

    const [details, loadingDetails] = useDetails(id, mediaType);
    const runtimeHoures = Math.floor(details.runtime / 60);
    const runtimeMinutes = Math.floor(60 * (details.runtime / 60 - runtimeHoures));
    let popularity = details.popularity;
    if (popularity >= 10) {
        popularity = 10;
    }
    const url = `${mediaType}/${id}`;
    const getKey = useVideoKey(url);

    
    return (
       <>
            {loadingDetails ? <LoadingScreen /> :
                <>
                {mediaType !== 'person' &&
                <>
                
                    <div>
                    <Banner details={details} videoId={getKey} />
                    </div>
                    <h1>More details ↓</h1>
                </>
                }

                <div className='details-container'>
                    <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path || details.profile_path}`} alt='poster' width='250px' />
                    <div className='detailed-card'>

                        <h2>{`${details.title || details.name} (${details.release_date ? dayjs(details.release_date).format('YYYY') : dayjs(details.birthday).format('DD, MMM YYYY')})`}</h2>

                        <div className='geners'>
                            {details.genres && details.genres.map((genre) => {
                                return genre.name + ' | '
                            })}
                        </div>

                        <div>
                            {details.production_countries && details.production_countries.map((country) => {
                                return country.name + ' | '
                            })}
                        </div>

                        {details.runtime && details.runtime !== 0 &&
                            <div className='runtime'>
                                {`${runtimeHoures}h${runtimeMinutes}m`}
                            </div>
                        }
                        {details.known_for_department &&

                            <div>
                                {details.known_for_department}
                            </div>
                        }
                        <h2>{details.vote_average ? details.vote_average + '/10' : popularity + '/10'}</h2>

                        {details.tagline && <div className='tagline'>
                            {details.tagline}
                        </div>}

                        {(details.overview || details.biography) && <div className='detail-overview'>
                            <span> {details.overview ? 'OVERVIEW' : 'BIOGRAPHY'}</span>
                            <br />
                            {details.overview || details.biography}
                        </div>}

                    </div>

                </div>
                <div>
                    <h1>You might be interested</h1>
                    <Carousel items={ mediaType==='person' ? knownFor[0] : similar[0]} mediaType={mediaType} />
                </div>
            
            </>
            }
                
        </>
        
    )
}
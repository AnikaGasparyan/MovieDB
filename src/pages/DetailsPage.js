import React, { useMemo, useContext } from "react";
import { LoadingScreen } from "../components/loader/LoaderComponent";
import { useDetails } from "../hooks/useDetails";
import { Carousel } from "../components/carousel/CarouselComponent";
import { useRecommendations } from "../hooks/useRecommendations";
import "./page.css";
import dayjs from "dayjs";
import { Banner } from "../components/banner/BannerComponent";
import { useVideoKey } from "../hooks/useVideoKey";
import { VideoContext } from '../conexts/VideoStateContext';   


export const DetailsPage = ({ match }) => {
  const mediaType = match.params.mediaType;
  const id = match.params.id;
  const mediaUrl = `${mediaType}/${id}/similar`;
  const { recomList } = useRecommendations(mediaUrl);
  const {results:movieRecommendations = []} = recomList;

  const {details, isLoading: loadingDetails} = useDetails(id, mediaType);
  const {
    runtime,
    poster_path,
    genres = [],
    release_date,
    overview,
    tagline,
    production_countries=[],
    title,
    vote_average,
    name
  } = details;

  const runtimeHoures = Math.floor(runtime / 60);
  const runtimeMinutes = Math.floor(60 * (runtime / 60 - runtimeHoures));
  
  const url = `${mediaType}/${id}`;
  const getKey = useVideoKey(url);
  const genresText = genres
    .reduce((acc, { name }) => {
      return [...acc, name];
    }, []).join(" | ");

    const productionCountries = production_countries
    .reduce((acc, { name }) => {
      return [...acc, name];
    }, []).join(" | ");

  const carouselData = useMemo(() => {
    return movieRecommendations.map(movie => {
      return {
        ...movie,
        mediaType: mediaType,
      };
    });
  }, [mediaType, movieRecommendations]);
  const videoState = useContext(VideoContext);    

  return (
    <>
      {loadingDetails ? (<LoadingScreen />) : (
        <>
        
            <div>
              <Banner details={details} videoId={getKey} />
            </div>
          <div  className={videoState.isClicked? 'banner-overlay' : ''} >
            <h1>More details ↓</h1>
            
            <div className="details-container ">
              <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="poster" width="250px" />
              <div className="detailed-card">
                <h2>{`${title || name} (${dayjs(release_date).format("YYYY")})`}</h2>

                <div className="geners">{genresText}</div>

                <div>
                  {productionCountries}
                </div>

                {runtime && runtime !== 0 && <div className="runtime">{`${runtimeHoures}h${runtimeMinutes}m`}</div>}

                <h2>{vote_average + "/10"}</h2>

                {tagline && <div className="tagline">{tagline}</div>}

                {(overview) && (
                  <div className="detail-overview">
                    <span> {"BIOGRAPHY"}</span>
                    <br />
                    {overview}
                  </div>
                )}
              </div>
            </div>
            <div>
              <h1>You might be interested</h1>
              <Carousel items={carouselData} mediaType={mediaType} />
            </div>

          </div>
        </>
        )}

    </>
  );
};

import React from 'react'
import { useDispatch } from 'react-redux'; 
import {setFavorites} from '../actions/setFavorites';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { InfoSlot } from './InfoSlot';
import "../css/starships.css"




const StarshipCard = (props) => {
const dispatch = useDispatch();

  return (
    <div>
      <Card className="starshipCardContainer">
        <div className="info-section">
          <h1>{props.item.name}</h1>
        </div>
        <InfoSlot text={`Manufactured by ${props.item.manufacturer}`} />
        <InfoSlot text={props.item.model} />
        <InfoSlot text={`Known as a ${props.item.starship_class}`} />
        <InfoSlot text={`Max Speed of ${props.item.max_atmosphering_speed} KM/H`} />
        <InfoSlot text={`$${props.item.cost_in_credits} in Galactic Credits`}/>
        <InfoSlot text={`${props.item.created}`} />
        <div className="favoritesButton">
          <Button
            variant="outlined"
            size="large"
            onClick={() => {
              setFavorites(dispatch, props);
            }}
          >
            Add to Favorites
            <FavoriteIcon fontSize="small" />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default StarshipCard
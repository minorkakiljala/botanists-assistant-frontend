import * as React from 'react';
import './PlantCard.css';
import { IoMdFlower } from 'react-icons/io';

interface Props {
  plant: Plant;
}

const PlantCard = (props: Props) => {
  const { plant } = props;
  return (
    <div className="PlantCard">
      <div className="PlantCard-Header">
        <IoMdFlower color="var(--color-green)" />
        <h3>{plant.name}</h3>
      </div>
      <p className="PlantCard-Label">Watered</p>
      <p className="PlantCard-Value">{plant.lastWatered || 'Never'}</p>
      <p className="PlantCard-Label">Days between</p>
      <p className="PlantCard-Value">
        {plant.daysToWait} day{plant.daysToWait == 1 ? '' : 's'}
      </p>
    </div>
  );
};

export default PlantCard;

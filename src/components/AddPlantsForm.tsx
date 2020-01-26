import * as React from 'react';
import './AddPlantsForm.css';
// import apiClient from '../api/localClient';
import apiClient from '../api/remoteClient';

interface Props {
  setRefreshing: (value: boolean) => void;
}

interface FormState {
  name: string;
  daysToWater: number;
}

const initialForm: FormState = {
  name: '',
  daysToWater: 1
};

const AddPlantsForm = (props: Props) => {
  const { setRefreshing } = props;
  const [formState, setFormState] = React.useState(initialForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const { name, daysToWater } = formState;

    if (!name || name.length < 3) {
      return alert(
        'The name for the plant is too short, please make it longer than 3 characters'
      );
    }

    return apiClient
      .createPlant(name, daysToWater)
      .then(() => setRefreshing(true))
      .then(() => setFormState(initialForm))
      .catch(err => {
        console.error('An error happened adding a new plant', err);
      });
  };

  return (
    <div className="AddPlantsForm">
      <h2>Add a new plant</h2>
      <form className="AddPlantsForm-Form" onSubmit={handleSubmit}>
        <div className="AddPlantsForm-FormInput">
          <label className="AddPlantsForm-InputLabel">Name</label>
          <input
            type="text"
            onChange={handleChange}
            id="name"
            value={formState.name}
          />
        </div>
        <div className="AddPlantsForm-FormInput">
          <label className="AddPlantsForm-InputLabel">
            Days between watering: ({formState.daysToWater})
          </label>
          <input
            id="daysToWater"
            type="range"
            min="0"
            max="30"
            value={formState.daysToWater}
            onChange={handleChange}
          />
        </div>
        <button className="AddPlantsForm-Button" onClick={handleSubmit}>
          Add plant
        </button>
      </form>
    </div>
  );
};

export default AddPlantsForm;

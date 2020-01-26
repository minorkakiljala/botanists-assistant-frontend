import * as React from 'react';

interface Props {}

interface FormState {
  name: string;
  daysToWater: number;
}

const initialForm: FormState = {
  name: '',
  daysToWater: 1
};

const AddPlantsForm = (props: Props) => {
  const [formState, setFormState] = React.useState(initialForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    setFormState({ ...formState, [id]: value });
  };

  return (
    <form>
      <h2>Add a new plant</h2>
      <div className="FormInput">
        <label>Name</label>
        <input onChange={handleChange} id="name" />
      </div>
      <div className="FormInput">
        <label>daysToWater</label>
        <input
          id="name"
          type="range"
          min="0"
          max="30"
          defaultValue={formState.daysToWater}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default AddPlantsForm;

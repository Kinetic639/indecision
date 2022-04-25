import React, { useState } from 'react';

export const AddOption = (props) => {
  const [error, setError] = useState(undefined);

  const handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = props.handleAddOption(option);

    setError(error);

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  return (
    <div>
      {error && <p className="add-option-error">{error}</p>}
      <form className="add-option" onSubmit={handleAddOption}>
        <input className="add-option__input" type="text" name="option" />
        <button className="button">Add Option</button>
      </form>{' '}
    </div>
  );
};

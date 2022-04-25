import { AddOption } from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import { OptionModal } from './OptionModal';

import React, { useState, useEffect } from 'react';

export const App = () => {
  const [options, setOptions] = useState(() => {
    const savedOptions = localStorage.getItem('options');
    if (savedOptions) {
      return JSON.parse(savedOptions);
    } else {
      return [];
    }
  });
  const [selectedOption, setSelectedOption] = useState('');

  const handleDeleteOptions = () => {
    setOptions([]);
  };
  const handleDeleteOption = (optionToRemove) => {
    setOptions(options.filter((option) => optionToRemove !== option));
  };

  const handlePick = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    setSelectedOption(option);
  };

  const handleClearSelectedOption = () => {
    setSelectedOption('');
  };

  const handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    setOptions(options.concat(option));
  };

  useEffect(() => {
    localStorage.setItem('options', JSON.stringify(options));
  }, [options]);

  return (
    <div>
      <Header />
      <div className="container">
        <Action hasOptions={options.length > 0} handlePick={handlePick} />
        <div className="widget">
          <Options
            options={options}
            handleDeleteOptions={handleDeleteOptions}
            handleDeleteOption={handleDeleteOption}
          />
          <AddOption handleAddOption={handleAddOption} />
        </div>
      </div>
      <OptionModal
        selectedOption={selectedOption}
        okClick={handleClearSelectedOption}
      />
    </div>
  );
};

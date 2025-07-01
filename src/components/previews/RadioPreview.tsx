import { useState } from 'react';
import { Radio } from '@/components';

export const RadioPreview = () => {
  const [value, setValue] = useState('option1');

  return (
    <div className="space-y-4">
      {/* Basic Radio Group */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Basic Radio Group</h3>
        <div className="space-y-2">
          <Radio
            checked={value === 'option1'}
            onChange={(e) => setValue(e.target.value)}
            value="option1"
            label="Option 1"
          />
          <Radio
            checked={value === 'option2'}
            onChange={(e) => setValue(e.target.value)}
            value="option2"
            label="Option 2"
          />
          <Radio
            checked={value === 'option3'}
            onChange={(e) => setValue(e.target.value)}
            value="option3"
            label="Option 3"
          />
        </div>
      </div>

      {/* Disabled Radio */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Disabled Radio</h3>
        <div className="space-y-2">
          <Radio
            checked={value === 'option1'}
            onChange={(e) => setValue(e.target.value)}
            value="option1"
            disabled
            label="Disabled Option"
          />
        </div>
      </div>
    </div>
  );
};

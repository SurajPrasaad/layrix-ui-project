import { useState } from 'react';
import { Checkbox } from '@/components/checkbox';

export const CheckboxPreview = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-4">
      {/* Basic Checkbox */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Basic Checkbox</h3>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          label="Basic Checkbox"
        />
      </div>

      {/* Disabled Checkbox */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Disabled Checkbox</h3>
        <Checkbox disabled label="Disabled Checkbox" />
      </div>
    </div>
  );
};

import { Card } from '@/components';

export const CardPreview = () => {
  return (
    <div className="space-y-4">
      {/* Basic Card */}
      <Card>
        <h3 className="text-lg font-semibold mb-2">Basic Card</h3>
        <p className="text-gray-400">This is a basic card with some content.</p>
      </Card>

      {/* Elevated Card */}
      <Card variant="elevated">
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-400">This card has an elevated style with a shadow.</p>
      </Card>

      {/* Card with Header */}
      <Card>
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <h3 className="text-lg font-semibold">Card with Header</h3>
          <button className="text-gray-400 hover:text-gray-300">×</button>
        </div>
        <p className="text-gray-400 pt-3">This card has a header section.</p>
      </Card>
    </div>
  );
};

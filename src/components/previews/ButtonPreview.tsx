import { Button } from '@/components/button';

export const ButtonPreview = () => {
  return (
    <div className="space-y-6">
      {/* Basic States */}
      <div className="space-y-4">
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Loading State */}
      <div className="flex gap-4">
        <Button variant="primary" loading>Loading...</Button>
        <Button variant="outline" loading>Loading...</Button>
        <Button variant="ghost" loading>Loading...</Button>
      </div>

      {/* Disabled State */}
      <div className="flex gap-4">
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="ghost" disabled>Disabled</Button>
      </div>
    </div>
  );
};

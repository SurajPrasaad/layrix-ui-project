import { Button } from '../components/button';
import { Card } from '../components/card';
import { Modal } from '../components/modal';
import { Input } from '../components/input';
import { Select } from '../components/select';
import { Checkbox } from '../components/checkbox';
import { Radio } from '../components/radio';
import { Textarea } from '../components/textarea';
import { Badge } from '../components/badge';
import { Avatar } from '../components/avatar';
import { Tooltip } from '../components/tooltip';
import { Alert } from '../components/alert';
import { ProgressBar } from '../components/progress-bar';
import { Accordion } from '../components/accordion';

import Components from './components.mdx';

interface ComponentVariant {
  variant: string;
  label: string;
  description?: string;
}

interface ComponentProps {
  [key: string]: {
    type: string;
    description: string;
    options?: string[];
    optional?: boolean;
  } | undefined;
}

interface Component {
  name: string;
  description: string;
  variants: ComponentVariant[];
  props: ComponentProps;
  example?: string | string[];
  sizes?: string[];
}

import componentsData from '../components.json';

const componentsList = {
  Button,
  Card,
  Modal,
  Input,
  Select,
  Checkbox,
  Radio,
  Textarea,
  Badge,
  Avatar,
  Tooltip,
  Alert,
  ProgressBar,
  Accordion,
};

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Components />
    </div>
  );
}

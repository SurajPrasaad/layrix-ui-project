export interface ComponentConfig {
  name: string;
  description: string;
  dependencies: string[];
  peerDependencies: string[];
  styles: string[];
  variants: string[];
}

export interface Config {
  components: {
    [key: string]: ComponentConfig;
  };
}

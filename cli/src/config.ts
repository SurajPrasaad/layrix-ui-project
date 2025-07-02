import { type Config } from "../../types/config";

const config: Config = {
  components: {
    button: {
      name: "button",
      description: "A button component",
      dependencies: ["react"],
      peerDependencies: ["react-dom"],
      styles: ["button.css"],
      variants: ["default", "secondary", "destructive", "outline", "ghost", "link"]
    },
    input: {
      name: "input",
      description: "An input component",
      dependencies: ["react"],
      peerDependencies: ["react-dom"],
      styles: ["input.css"],
      variants: ["default"]
    }
  }
};

export default config;

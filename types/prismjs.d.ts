declare module 'prismjs' {
  export interface Prism {
    highlight(code: string, grammar: any, language: string): string;
  }
  export const highlight: (code: string, grammar: any, language: string) => string;
  export const languages: {
    [key: string]: any;
  };
}

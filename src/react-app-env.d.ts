/// <reference types="react-scripts" />
declare module process {
  interface env {
    REACT_APP_API_URL: string;
  }
}

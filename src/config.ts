require('dotenv').config();

// This utility function is used to help use debug wether
// Required environment variables are missing.
const isRequired = (env?: string, label?: string) => {
  if (!env)
    throw Error(
      `Environment variable is required ${label ? ': ' + label : '.'}`
    );
  return env;
};

export const apiUrl = isRequired(
  process.env.REACT_APP_API_URL,
  'URL to remote api'
);

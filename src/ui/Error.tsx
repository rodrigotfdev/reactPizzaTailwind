import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

interface ErrorType {
  message?: string;
  data?: string;
}

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError() as ErrorType; // Cast to ErrorType

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message || 'An unexpected error occurred'}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default NotFound;

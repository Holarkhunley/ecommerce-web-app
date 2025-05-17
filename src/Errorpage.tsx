
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError() as { message?: string; statusText?: string };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Oops!</h1>
      <p>Sorry, something went wrong.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;

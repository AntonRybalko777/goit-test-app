import { CarsList } from 'components/CarsList/CarsList';
import { selectError, selectIsLoading } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';

export default function Catalog() {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {isLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <RotatingLines
            visible={true}
            height="66"
            width="66"
            strokeColor="#3470ff"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {isError && (
        <p>Whoops... Something went wrong. Please try to reload the page.</p>
      )}
      {!isError && !isLoading && <CarsList />}
    </div>
  );
}

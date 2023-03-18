import { Oval } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';

export const Loader = () => {
  return (
    <Backdrop>
      <Oval
        height={100}
        width={100}
        color="#686868"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#DBDBDB"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Backdrop>
  );
};
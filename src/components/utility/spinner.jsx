import { Fragment } from 'react';
import { Spin } from 'antd';
import { useMainContext } from '../../hooks/useMainContext';

const Spinner = () => {
    const { spin } = useMainContext();
    return (
        <Fragment>
            {spin && (

                <Spin tip={<p className='text-base my-1'>Loading...</p>} size="large" fullscreen />

            )}
        </Fragment>
    );
};


export default Spinner;

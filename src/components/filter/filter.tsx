//hooks
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
//slices
import { filterSlice } from '@/GlobalRedux/slices';
//components
import Divider from './Divider';
import Species from './Species';
import StarSection from './StarSection';
import RangeSlider from './priceSlider';
import { RootState } from '@/GlobalRedux/store';

export default function Filter() {
    const dispatch = useDispatch();

    const selectedUrl = window.location.href.split('/').pop();

    return (
        <div style={{ overflow: 'hidden' }}>
            <div
                style={{
                    marginTop: '30%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '10%',
                }}
            >
                <RangeSlider />
            </div>
            <Divider />
            <div
                style={{
                    height: '20vh',
                }}
            >
                <StarSection />
            </div>
            <Divider />
            <div
                style={{
                    marginTop: '10%',
                    height: '20vh',
                    marginLeft: '5%',
                }}
            >
                <Species />
            </div>
        </div>
    );
}

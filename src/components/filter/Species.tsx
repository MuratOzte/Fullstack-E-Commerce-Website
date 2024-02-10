//hooks
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//slices
import { filterSlice } from '@/GlobalRedux/slices';

const storage = [
    'All',
    '8GB',
    '16GB',
    '32GB',
    '64GB',
    '128GB',
    '256GB',
    '512GB',
];

const battery = [
    'All',
    '1000mAh',
    '2000mAh',
    '3000mAh',
    '4000mAh',
    '5000mAh',
    '6000mAh',
];

const ram = ['All', '2GB', '3GB', '4GB', '6GB', '8GB', '12GB'];
const Species = () => {
    const dispatch = useDispatch();

    const [selected, setSelected] = useState<string[]>(['All', 'All', 'All']);

    useEffect(() => {
        dispatch(
            filterSlice.actions.setFilters({
                key: 'minRam',
                value: selected[0],
            })
        );
        dispatch(
            filterSlice.actions.setFilters({
                key: 'minStorage',
                value: selected[1],
            })
        );
        dispatch(
            filterSlice.actions.setFilters({
                key: 'minBattery',
                value: selected[2],
            })
        );
    }, [selected]);

    return (
        <>
            <div style={div}>
                <p style={p}>Minimum Ram Capacity</p>
                <select
                    style={select}
                    onChange={(e) =>
                        setSelected([e.target.value, selected[1], selected[2]])
                    }
                >
                    {ram.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <div style={div}>
                <p style={p}>Minimum Storage Capacity</p>
                <select
                    style={select}
                    onChange={(e) =>
                        setSelected([selected[0], e.target.value, selected[2]])
                    }
                >
                    {storage.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <div style={div}>
                <p style={p}>Minimum Battery Capacity</p>
                <select
                    style={select}
                    onChange={(e) =>
                        setSelected([selected[0], selected[1], e.target.value])
                    }
                >
                    {battery.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Species;

const div: React.CSSProperties = {
    marginTop: '5%',
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
};

const p: React.CSSProperties = {
    width: '50%',
    color: 'black',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 500,
    textAlign: 'left',
    textShadow: '0 1px 0 rgba(0, 0, 0, 0.3)',
};

const select: React.CSSProperties = {
    width: '40%',
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: 'whitesmoke',
    color: 'black',
    border: '1px solid #ccc',
    padding: '8px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    fontSize: '14px',
    outline: 'none',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Arial, sans-serif',
};

import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import { Textarea } from '@chakra-ui/react';

const JsonView = (props: any = { data: '' }) => {
    // const [data, set: { data: object; }Data] = useState({});
    // useEffect(() => {
    //     const fetchJson = async () => {
    //         // const res = await fetch('https://api.github.com/orgs/vuejs/repos');
    //         const res = await fetch('https://api.github.com/users/Forest-211');
    //         const json = await res.json();
    //         setData(json);
    //     };

    //     fetchJson();
    // }, []);
    const { data } = props;

    return (
        <div>
            <ReactJson
                style={{
                    borderWidth: 1,
                    borderColor: '#eee',
                    borderRadius: 12,
                }}
                src={JSON.parse(data)}
            />
        </div>
    );
};

export default JsonView;

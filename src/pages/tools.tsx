import { Textarea } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import JsonView from '../components/JsonView';
import styles from '../styles/tools.module.css';

const Tools = () => {
    const [value, setValue] = useState<string>('');
    useEffect(() => {
        const fetchJson = async () => {
            // const res = await fetch('https://api.github.com/orgs/vuejs/repos');
            const res = await fetch('https://api.github.com/users/Forest-211');
            const json = await res.json();
            setValue(JSON.stringify(json));
        };

        fetchJson();
    }, []);
    return (
        <div>
            <div className={styles['container']}>
                <Textarea
                    className={styles['textarea']}
                    resize={'vertical'}
                    size={'md'}
                    value={value}
                    onChange={text => setValue(text.target.value)}
                />
                <JsonView data={value} />
            </div>
        </div>
    );
};

export default Tools;

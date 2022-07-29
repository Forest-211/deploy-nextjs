import { Textarea } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
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
        <div className={styles['container']}>
            <h2>tools</h2>
            <Textarea
                className={styles['textarea']}
                resize={'vertical'}
                size={'md'}
                value={value}
                onChange={text => setValue(text.target.value)}
            />
        </div>
    );
};

export default Tools;

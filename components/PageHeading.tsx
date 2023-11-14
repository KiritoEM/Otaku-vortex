import Head from 'next/head';
import React from 'react';

interface ITitle {
    title: string;
}

const PageHeading: React.FC<ITitle> = ({ title }): JSX.Element => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};

export default PageHeading;

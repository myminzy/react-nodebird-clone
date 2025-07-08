/* 

페이지의 공통된 것들을 처리 할 수 있다. 

React에서 App.js는 모든 페이지에 공통 적용되는 루트 컴포넌트

그래서 antd의 CSS를 여기에 넣으면 모든 컴포넌트에서 버튼, 그리드 등 antd UI를 바로 쓸 수 있다.

import 'antd/dist/antd.css'	=> antd의 CSS를 전역에 적용

<div>공통 메뉴</div>
pages 특정 페이지는 레이아웃 형태로 감싸면 된다. 

*/

import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';


const NodeBird = ({ Component }) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <title>NodeBird</title>
        </Head>
        <Component />
        </>
    );
};

NodeBird.PropTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default NodeBird;
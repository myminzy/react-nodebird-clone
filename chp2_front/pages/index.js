
/*
react 사용시 이렇게 해줘야하는데 next는 굳이 필요 없다.
import React from "react";

next는 무조건 pages라고 해야한다.
*/

import AppLayout from "../components/AppLayout";

const Home = () => {
    return  (
        <AppLayout>
            <div>Hello, Next!</div>
        </AppLayout>        
    );  
}

export default Home;

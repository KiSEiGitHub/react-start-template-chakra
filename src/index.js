import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./Theme/Theme";

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                {/* Insert your link here */}
                <Route path='/' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </ChakraProvider>,
    document.getElementById('root')
);
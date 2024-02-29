import React from 'react';
import { createRoot } from "react-dom/client";
import MyButton from "./components/MyButton";
import MyAnchor from "./components/MyAnchor";

createRoot(document.getElementById('root'))
    .render(
        <div>
            <MyButton />
            <br />
            <MyAnchor />
        </div>
    );

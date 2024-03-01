import { createRoot } from "react-dom/client";
import MyButton from "./components/MyButton";
import MyAnchor from "./components/MyAnchor";

// Enable live reloading
// TODO: Disable for production
new EventSource('/esbuild')
    .addEventListener('change', () => location.reload())

createRoot(document.getElementById('root'))
    .render(
        <div>
            <MyButton />
            <br />
            <MyAnchor />
        </div>
    );

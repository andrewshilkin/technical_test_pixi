import {App} from "./App";

const app = new App(); 
window.onload = async (): Promise<void> => {
    app.init();
    app.run();
}
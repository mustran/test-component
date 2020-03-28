import React, { useState } from "react";
import Checkbox from "./elements/Checkbox";

function App() {
    const [checked, setChecked] = useState(false);

    return (
        <Checkbox
            id="id"
            checked={checked}
            label="Check me!"
            onChange={e => console.log(e)}
        />
    );
}

export default App;

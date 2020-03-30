import React, { useState } from "react";
import Checkbox from "./elements/Checkbox";

function App() {
    const [checkMe, setCheckMe] = useState(false);
    const [checkedByDefault, setCheckedByDefault] = useState(true);
    console.log(checkMe);
    return (
        <>
            <Checkbox
                id="1"
                checked={checkMe}
                label="Check me!"
                onChange={() => setCheckMe(!checkMe)}
            />
            <Checkbox
                id="2"
                checked={checkedByDefault}
                label="Checked by default, but can be changed"
                onChange={() => setCheckedByDefault(!checkedByDefault)}
            />
            <Checkbox
                id="3"
                checked
                label="Checked by default, cannot be changed"
                onChange={e => console.log(e)}
            />
            <Checkbox
                id="4"
                checked={false}
                label="Disabled and unchecked!"
                onChange={e => console.log(e)}
                disabled
            />
            <Checkbox
                id="5"
                checked
                label="Disabled and checked!"
                onChange={e => console.log(e)}
                disabled
            />
        </>
    );
}

export default App;

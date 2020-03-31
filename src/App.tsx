import React, { useState } from "react";
import { Typography } from "./elements/Typography";
import { Button } from "./elements/Button";

function App() {
    return (
        <div>
            <Button size="xs">Button XS</Button> <br />
            <Button size="sm">Button SM</Button> <br />
            <Button size="md">Button MD</Button> <br />
            <Button size="lg">Button LG</Button> <br />
            <Button fullWidth>Button Full Width</Button> <br />
        </div>
    );
}

export default App;

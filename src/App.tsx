import React, { useState } from "react";
import Pagination from "./components/Pagination/Pagination";

const App = () => {
    return (
        <Pagination
            onPageChange={console.log}
            totalItems={50}
            startPage={4}
            numberOfPagesDisplayed={10}
            itemsPerPage={12}
        />
    );
};

export default App;

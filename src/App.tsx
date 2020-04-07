import React from "react";
import { Table } from "./components/Table";
import { FaMusic } from "react-icons/fa";
import Pagination from "./components/Pagination/Pagination";
import { Checkbox } from "./components/Checkbox";

class App extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            page: 0,
        };

        this.onPageChange = this.onPageChange.bind(this);
    }

    onPageChange(data: any) {
        this.setState({ page: data.selected });
    }

    render() {
        const columns = [
            {
                title: "ID",
                key: "id",
            },
            {
                title: "",
                key: "icon",
                render: ({ value }: any) => <FaMusic />,
            },
            {
                title: "Name",
                key: "name",
            },
            {
                title: "Date Created",
                key: "dateCreated",
            },
            {
                title: "Director",
                key: "director",
                render: ({ value, rowValues }: any) =>
                    `${value} - ${rowValues.dateCreated}`,
            },
        ];

        const data = [
            {
                id: 22,
                icon: "music",
                name: "Won't You Be My Neighbour?",
                director: "Morgan Neville",
                dateCreated: "2018/07/24",
            },
            {
                id: 28,
                icon: "code",
                name: "Soundtrack: No Country",
                director: "Coen Brothers",
                dateCreated: "2018/07/21",
            },
        ];

        const totalPages = Math.ceil(data.length / 5);

        return (
            <React.Fragment>
                <Checkbox id="1" checked label="Check me!" onChange={() => console.log("Checked")} />
                <Table
                    columns={columns}
                    data={data}
                    options={{
                        rowSelection: {
                            active: true,
                            action: (data) => console.log(data),
                        },
                        rowActions: [
                            { icon: "edit", onClick: (id) => console.log(id) },
                            { icon: "cog", onClick: (id) => console.log(id) },
                            { icon: "trash", onClick: (id) => console.log(id) },
                        ],
                    }}
                />
                <Pagination
                    onPageChange={console.log}
                    totalItems={50}
                    startPage={4}
                    numberOfPagesDisplayed={10}
                    itemsPerPage={12}
                />
            </React.Fragment>
        );
    }
}

export default App;

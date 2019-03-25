import React, {useState} from "react";
import PropTypes from "prop-types";
import Table from "../../../ui-components/table"
import Actions from "../common/actions";
import View from "../common/view";

function UserTable({edit}) {

    const deleteHandler = (id) =>{
        console.error("DELETING ", id)
    };

    const editHandler = (id) =>{
        console.info("OPEN MODAL EDIT ", id)
    };

    const viewHandler = (id) => {
        console.log("Link to ",  id)
    };

    const columns = [
        {
            Header: "",
            Cell: row => {
                const {original} = row;
                const {id} = original;
                return <View
                    handleView={() => viewHandler(id)}
                />
            },
            width: 120
        },
        {
            Header: "First Name",
            accessor: "firstName"
        },
        {
            Header: "Last Name",
            accessor: "lastName",
        },
        {
            Header: "Age",
            accessor: "age"
        }, {
            Header: "Status",
            accessor: "status"
        },
        {
            Header: "Actions",
            Cell: row => {
                const {original} = row;
                const {id} = original;
                return <Actions
                    handleDelete={() => deleteHandler(id)}
                    handleEdit={() => editHandler(id)}
                />
            },
            width: 100
        }
    ];

    return <Table
        fetchApi={"https://jsonplaceholder.typicode.com/posts"}
        columns={columns}
        defaultPageSize={5}
        filterOptions={{}}
    />
}

UserTable.propTypes = {};

export default UserTable;

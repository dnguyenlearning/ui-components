import React, {useState} from "react";
import PropTypes from "prop-types";
import Table from "../../../ui-components/table"

function UserTable({edit}){
    const columns = [
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
        },{
            Header: "Status",
            accessor: "status"
        }
    ];

    return <Table
        fetchApi={"https://jsonplaceholder.typicode.com/posts"}
        columns = {columns}
        defaultPageSize={5}
        filterOptions={{}}
    />
}

UserTable.propTypes = {

};

export default UserTable;

import React from "react";
import DataTable from 'react-data-table-component';

const tableStyle = {
    rows: {
        style: {
            minHeight: '72px',
        }
    },
    headCells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
};

const columns = [
    {
        name: 'Image',
        cell: row => <img src={row.image} alt={row.name} />,
        width: '72px',
    },
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'Phone',
        selector: 'phone',
    },
    {
        name: 'email',
        cell: row => <a href={`mailto: ${row.email}`}>{row.email}</a>,
    },
    {
        name: 'D.O.B.',
        selector: 'dob',
        cell: row => <>{formatDate(row.dob)}</>,
        sortable: true,
    },
];

function formatDate(empDob) {
    if (empDob.length > 0) {
        const date = empDob.substr(8, 2);
        const month = empDob.substr(5, 2);
        const year = empDob.substr(0, 4);
        return `${date}-${month}-${year}`;
    }
    return "err";
}

function EmpTable(props) {
    return (<DataTable
        columns={columns}
        data={props.DataTable}
        customStyles={tableStyle}
        fixedHeader={true}
        fixedHeaderScrollHeight={'75vh'}
    />)
};

export default EmpTable;
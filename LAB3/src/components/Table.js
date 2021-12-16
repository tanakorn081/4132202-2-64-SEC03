import React from "react";

function GenTable(peoples){
    return peoples.map((people)={
        const {id,name:rname} = people;
        return (
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
            </tr>

        );
    })
}

function DataTable(){
    const student = [
        {id:1, name:"Golf"},
        {id:2, name:"Flog"},
    ];
    return(
        <>
        <table>
            <tr>
                <tbody>{GenTable(student)}</tbody>
            </tr>
        </table>
        </>
    )
}

export default DataTable;
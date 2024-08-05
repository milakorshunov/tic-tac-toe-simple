import React from "react";

type CellProps =  {
    value: string;
    onClick: ()=> void;

}
const Cell: React.FC<CellProps> = ({value, onClick}) => {
    const cellStyle = {
        padding: "0",
        border: "1px solid black",
        width: "100px", // Ensures cells are square
        height: "100px",
        backgroundColor: "white",
        fontSize: "24px",
    };

    return (
        <td style={cellStyle} onClick = {onClick}>{value}</td>
    );

}

export default Cell;
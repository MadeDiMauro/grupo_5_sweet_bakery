import React from "react"

function Row(props) {
    const { rowData = {}, columns = [] } = props;
    console.log (rowData,columns)
    return (
        <tr>
            {
                columns.map((element, i) => <td key={ i }>
                { element=="products_categories" && rowData [element].type
                }
                    
                {element=="images"&&  <img className="img-thumbnail" src= {rowData [element][0].url_image} style= {{width:250+'px'}}/>}
                {element=="url_detail" && <a href={rowData [element]}>Ver Detalle</a>}
                {element !="products_categories" && element !="url_detail" && element !="images"&& rowData [element]}
                </td>)
            }
            
        </tr>
    )
}

export default Row;
import React from "react";
import PropTypes from "prop-types";

function ContentRowMovies(props) {
 
    const { 
        title = "No Title",
        value = 0,
        color = "",
        icon = "",
    } = props;

    return (

        <div className="col-md-4 mb-4">
            <div className={"card "+ color +" shadow h-100 py-2"}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`${icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

ContentRowMovies.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    icons: PropTypes.array
}


export default ContentRowMovies;

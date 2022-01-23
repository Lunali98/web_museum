import {useNavigate, useParams} from "react-router-dom";
import React from "react";

export const withRouter = (Component) => {
    return (props) => {
        const navigate = useNavigate();

        return (
            <Component
                navigate={navigate}
                {...props}
            />
        );
    };
};

export const withRouterParams = (Component) => {
    return (props) => {
        const params = useParams();

        return (
            <Component
                params={params}
                {...props}
            />
        );
    };
};
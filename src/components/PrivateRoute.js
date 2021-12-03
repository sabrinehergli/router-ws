import React from 'react'
import {Route, Redirect} from 'react-router-dom'
const PrivateRoute = ({
    component: Component,
  	isAuthenticated,
  	userLevel,
    ...rest
}) => {
    return (
        <Route {...rest} component={(props)=> 
            isAuthenticated ? (
                <Component {...props} />
            ):(
                <Redirect to="/" />
            )
    } />
    )
}

export default PrivateRoute

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = (props) => {
    const {
        component: Component,
        pathRedirect,
        auth,
        ...rest
    } = props
    
    return <Route {...rest}>
        {(auth) ? <Component /> : <Redirect to={pathRedirect} />}
    </Route>

    // if(auth) {
    //     return <Route {...rest} render={() => <Component />}/>
    // } else {
    //     return <Redirect to={pathRedirect} />
    // }

    // return <Route {...rest} 
    // render={() => auth ? <Component /> : <Redirect to={pathRedirect} />}/>
}
import React, { Component } from 'react';
import Breadcrumbs from 'react-router-dynamic-breadcrumbs';

    const routes = {
        '/' : 'Home',
        '/feature':'Features',
        '/pricing': 'Pricing',
        '/action/action1': 'Action1',
        '/action/action2': 'Action2',
        '/action/action3': 'Action3'
    };

class BreadCrumbs extends Component{
        
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumbs
                            WrapperComponent={(props) => <ol className="breadcrumb" >{props.children}</ol>}
                            ActiveLinkComponent={(props) => <li className="breadcrumb-item active" >{props.children}</li>}
                            LinkComponent={(props) => <li className="breadcrumb-item">{props.children}</li>}
                            mappedRoutes={routes}
                        
                        />
                    </div>
                </div>
            </div>
        )
    }
    
}

export default BreadCrumbs;
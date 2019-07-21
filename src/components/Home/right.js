import React from 'react';
import {Route, Switch} from 'react-router-dom';
import InstitutionManagement from '../institution-management/institution-management'
import UserManagement from '../user-management/user-management'
import RoleManagement from '../role-management/role-management'
import AuthorityManagement from'../authority-management/authority-management'
import LoginDiary from'../diary-management/logindiary'
import DiaryManagement from'../diary-management/diary-management'
import HomePage from '../homePage/homePage'

class Right extends React.Component {
    render() {
        const data = [{
            path: '/institution-management',
            component: InstitutionManagement
        },{
            path: '/user-management',
            component: UserManagement
        },{
            path: '/role-management',
            component: RoleManagement
        },{
            path: '/authority',
            component: AuthorityManagement
        },{
            path: '/diary1',
            component: LoginDiary
        },{
            path: '/diary2',
            component:DiaryManagement
        },{
            path: '/homePage',
            component: HomePage
        }]
        return (
            <div className="rightDiv">
                <Switch>
                    <Route exact path="/home"/>
                    {
                        data.map(e => {
                            return (
                                <Route key={e.path} path={e.path} component={e.component}></Route>
                            )
                        })
                    }
                </Switch>
            </div>
        )
    }
}

export default Right;
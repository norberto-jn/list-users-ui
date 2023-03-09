import UserItem from '@/pages/users/src/component/UserItem'
import { UserReactState } from '@/pages/users/src/states/UserReactState'
import 'bootstrap/dist/css/bootstrap.css'
import { Component, ReactNode } from 'react'
import { UserHttpUtils } from './src/managers/https/UserHttpUtils'

export default class Home extends Component<ReactNode, UserReactState> {

    constructor(props: any) {
        super(props)
        this.state = {
            data: null
        }
    }

    async componentDidMount() {
        this.setState({
            data: await UserHttpUtils.findAll()
        })
    }

    render(): ReactNode {
        return (
            <div className='container'>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.data?.map(item =>
                            <UserItem
                                key={`${item.id}`}
                                id={item.id}
                                email={item.email}
                                name={item.name}
                                username={item.username}
                            />
                        )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

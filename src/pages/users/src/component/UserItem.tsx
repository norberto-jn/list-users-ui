import UserResponseDTO from "@/pages/users/src/dtos/responses/UserResponseDTO"
import 'bootstrap/dist/css/bootstrap.css'
import { Component, ReactNode } from "react"

export default class UserItem extends Component<UserResponseDTO> {

    constructor(props: UserResponseDTO) {
        super(props)
    }

    render(): ReactNode {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.name}</td>
                <td>{this.props.username}</td>
                <td>{this.props.email}</td>
            </tr>
        )
    }
}

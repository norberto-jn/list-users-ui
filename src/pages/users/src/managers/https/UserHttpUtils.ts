import UserResponseDTO from "@/pages/users/src/dtos/responses/UserResponseDTO"
import { HttpUtils } from "../../../../../../utils/http/HttpUtils"

export class UserHttpUtils {
    static async findAll():Promise<UserResponseDTO[]> {
        const result = await HttpUtils.findAll<UserResponseDTO>('http://localhost:3001/users')
        console.log(result)
        return result
    }
}
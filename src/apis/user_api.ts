import {BasicNet, R} from "../basicNet";
import {UserApply, UserLogin, UserLoginEmail, UserResetPassword, UserUpdate} from "../module/users_req";
import axios, {AxiosResponse} from "axios";
import {ExecResult, SessionUserValue} from "../module/users_resp";

export class UserApi extends BasicNet{
    async Apply(data: UserApply):
        Promise<AxiosResponse<R<ExecResult>, axios.AxiosError>>
    {
        return await this.post('/user/apply',data)
    }
    async LoginName(data: UserLogin):
        Promise<AxiosResponse<R<undefined>, axios.AxiosError>>
    {
        return await this.post('/user/login/name',data)
    }
    async LoginEmail(data: UserLoginEmail):
        Promise<AxiosResponse<R<undefined>, axios.AxiosError>>
    {
        return await this.post('/user/login/email',data)
    }
    async ResetPassword(data: UserResetPassword):
        Promise<AxiosResponse<R<undefined>, axios.AxiosError>>
    {
        return await this.post('/user/reset/online',data)
    }
    async ResetPasswordEmail(data: UserResetPassword):
        Promise<AxiosResponse<R<undefined>, axios.AxiosError>>
    {
        return await this.post('/user/reset/forget',data)
    }
    async Logout():
        Promise<AxiosResponse<R<undefined>, axios.AxiosError>>
    {
        return await this.post('/user/logout',{})
    }
    async Update(data: UserUpdate):
        Promise<AxiosResponse<R<ExecResult[]>, axios.AxiosError>>
    {
        return await this.post('/user/update',data)
    }
    async Local():
        Promise<AxiosResponse<R<SessionUserValue>, axios.AxiosError>>
    {
        return await this.post('/user/local',{})
    }


}
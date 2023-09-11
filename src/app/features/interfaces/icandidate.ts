import { ISkill } from "./iskill"

export interface ICandidate {

    id: string
    name: string,
    surname: string
    email: string
    statusId:string
    skillIds: ISkill[]
}

import Id from "../value-object/id.value-object"

export default class BaseEntity {
    private _id: Id //vem do value-object Id, é quem gera representatividade, nao é ideal ser apenas do tipo string como estava antes
    private _createdAt: Date
    private _updatedAt: Date

    constructor(id?: Id){
        this._id = id
        this._createdAt = new Date()
        this._updatedAt = new Date()

    }

    get id(): Id {
        return this._id
    }

    get createAt(): Date {
        return this._createdAt
    }

    get updatedAt(): Date{
        return this._updatedAt
    }

    set updatedAt(updatedAt: Date) {
        this._updatedAt = updatedAt
    }

}
export default interface OperationPayload {
    sender: number,
    receiver: number,
    value: number
}
export interface Operation {
    id: string,
    sender: number,
    receiver: number,
    value: number,
    createdAt: Date
}
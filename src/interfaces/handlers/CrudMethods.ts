// param I for input, param O for output

export interface ICreate<I, O> { create(obj: I): Promise<O | null>}
export interface IReadAll<O> { readAll(): Promise<O[]>}
export interface IReadOne<O> { readOne(id: string): Promise<O | null>}
export interface IUpdate<I, O> { update(id: string, obj: Partial<I>): Promise<O | null>}
export interface IDelete<O> { delete(id: string): Promise<O | null>}
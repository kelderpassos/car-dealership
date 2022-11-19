import { RequestHandler } from 'express';

export interface ICreateHandler { create: RequestHandler }
export interface IReadAllHandler { readAll: RequestHandler }
export interface IReadOneHandler { readOne: RequestHandler }
export interface IUpdateHandler { update: RequestHandler }
export interface IDeleteHandler { delete: RequestHandler }

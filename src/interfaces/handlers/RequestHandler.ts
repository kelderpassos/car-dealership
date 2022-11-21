import { Request, Response } from 'express';

export interface ICreate { create(req: Request, res: Response): Promise<Response | null> }
export interface IReadAll { readAll(req: Request, res: Response): Promise<Response | null> }
export interface IReadOne { readOne(req: Request, res: Response): Promise<Response | null> }
export interface IUpdate { update(req: Request, res: Response): Promise<Response | null> }
export interface IDelete { delete(req: Request, res: Response): void }

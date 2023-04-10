import express from "express";

declare global {
  namespace Express {
   export interface Request {
      adm: {
        id: string
        name: string
      }
    }
  }
}

/*
declare namespace Express {
  export interface Request {
    adm: {
      id: string
      name: string
    }
  }
}
*/

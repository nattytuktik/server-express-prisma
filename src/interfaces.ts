import { Router } from "express";

export interface SetRoute {
  endpoint: string;
  controller: Router;
}

export interface Room {
    room: number;
    foor: number;
}

export interface User {
    first_name: string;
    last_name: string;
    chaya?: string | null ;
}

export interface Mitor {

}
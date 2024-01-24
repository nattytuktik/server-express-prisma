import { Router } from "express";

export interface SetRoute {
  endpoint: string;
  controller: Router;
}

export interface Room {
  id: number | null;
  room: number;
  foor: number;
}

export interface User {
  id: number | null;
  first_name: string;
  last_name: string;
  chaya?: string | null;
}

export interface Mitor {

}
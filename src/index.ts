import {AxiosRequestConfig} from "axios";
import jhipster from "./lib";
export interface IZzcyConfig {
  readonly axiosConfig?: AxiosRequestConfig;
  readonly username?: string;
  readonly password?: string;
  [propName: string]: any;
}

export default jhipster;

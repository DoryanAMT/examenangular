import { Injectable } from "@angular/core";
import axios from "axios";
import Login from "../models/Login";
import { environment } from "../../environments/environment.development";
import { Usuario } from "../models/usuario";


@Injectable({
    providedIn: 'root'
})
export default class ServiceCubos {
    authLogin(login: Login): Promise<any> {
        return new Promise(function (resolve) {

            let request = "api/Manage/Login";
            let url = environment.urlApiCubos + request;

            axios.post(url, login).then(response => {
                resolve(response);
            })
        })
    }

    getCubos(): Promise<any> {
        // console.log(token)
        return new Promise(function (resolve) {
            let request = "/api/Cubos"
            let url = environment.urlApiCubos + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        })
    }

    getMarcas(): Promise<any> {
        // console.log(token)
        return new Promise(function (resolve) {
            let request = "/api/Cubos/Marcas"
            let url = environment.urlApiCubos + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        })
    }

    getCubosMarca(marca: string): Promise<any> {
        // console.log(token)
        return new Promise(function (resolve) {
            let request = "/api/Cubos/CubosMarca/" + marca
            let url = environment.urlApiCubos + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        })
    }

    getCubosId(id: number): Promise<any> {
        // console.log(token)
        return new Promise(function (resolve) {
            let request = "/api/Cubos/" + id
            let url = environment.urlApiCubos + request;
            axios.get(url).then(response => {
                resolve(response.data);
            })
        })
    }

    insertUsuario(usuario: Usuario): Promise<any> {
        const token = localStorage.getItem('token');
        const url = `${environment.urlApiCubos}/api/Manage/RegistroUsuario`;
        const headers = { Authorization: `Bearer ${token}` };
        return axios
            .post(url, usuario, { headers })
            .then((response) => response.data);
    }

    getPerfil(): Promise<any> {
        const token = localStorage.getItem('token');
        const url = `${environment.urlApiCubos}api/Manage/PerfilUsuario`;
        const headers = { Authorization: `Bearer ${token}` };
        return axios
            .get(url, { headers })
            .then((response) => response.data);
    }

    getCompras(): Promise<any> {
        const token = localStorage.getItem('token');
        const url = `${environment.urlApiCubos}/api/Compra/ComprasUsuario`;
        const headers = { Authorization: `Bearer ${token}` };
        return axios
            .get(url, { headers })
            .then((response) => response.data);
    }

    insertPedido(idCubo: number): Promise<any> {
            const token = localStorage.getItem('token');
            const headers = { Authorization: `Bearer ${token}` };
            let request = "/api/Compra/InsertarPedido/"+ idCubo;
            // console.log(headers)
            let url = environment.urlApiCubos + request;
            console.log(url)
            return axios
            .post(url,{},{ headers })
            .then(response => {
                console.log(response)
            })
        
    }


}
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTask } from '../context/DTOs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }



  getAllTasks(){

    // let params = new HttpParams();
    // Object.entries(filter).forEach(([key,value]:any)=>{
    //   if(value){
    //     params = params.append(key,value)
    //   }
    // })
   // let headers = new HttpHeaders();
    //headers = headers.append('Authorization',"Bearer " + localStorage.getItem("token"))
    return this.http.get(  `https://tasks-be-crud.onrender.com/tasks/all-tasks`);
  }
createTask(model : any){
  return this.http.post("https://tasks-be-crud.onrender.com/tasks/add-task",model)
}

}

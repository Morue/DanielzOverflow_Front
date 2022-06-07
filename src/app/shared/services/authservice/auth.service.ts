import { Injectable } from '@angular/core'
//import { User } from 'src/app/pages/user/user.model'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 // endpoint: string = environment.SERVER_API_URL
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  currentUser = localStorage.getItem('user_id')

  constructor(private http: HttpClient, public router: Router) {}

  //signUp(user: User): Observable<any> {
    //const api = `${this.endpoint}user/register`
  //  return this.http.post(api, user).pipe(catchError(this.handleError))
  //}

 // login(user: User) {
   // return this.http.post<any>(`${this.endpoint}user/login`, user)
 // }

  getToken() {
    return localStorage.getItem('access_token')
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token')
    return authToken !== null ? true : false
  }

  doLogout() {
    localStorage.removeItem('access_token')
    const removeToken = localStorage.getItem('access_token')
    if (removeToken == null) {
      this.router.navigate(['login'])
    }
  }

  // User profile
 // getUserProfile(id): Observable<any> {
 //  const api = `${this.endpoint}user/${id}`
   // return this.http.get(api, { headers: this.headers }).pipe(
    //  map((res: Response) => {
      //  return res || {}
    //  }),
    //  catchError(this.handleError)
   // )
 // }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = ''
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(msg)
  }
}

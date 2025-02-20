import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    username:'',
    password:''
  };

  router = inject(HttpClient);

  onLogin() {
    this.http.post("_url",this.loginObj).subscribe((res:any)=>{
      if(res.result) {
       localStorage.setItem("leaveUser",JSON.stringify(res.data));
       this.router.navigateByUrl("dashbord")
      } else {
        alert(res.message)
      }
    });
  
  }

}

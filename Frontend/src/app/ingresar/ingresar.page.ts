import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../Services/login/login.service';
//import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {
  
  userForm =
  {
    name : String,
    password : String,
  };

  constructor(
    public navCtrl: NavController,
    //private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private loginService: LoginService,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {

    }
    async login(forma: NgForm)
    {
      if (forma.valid) {
        const loading = await this.loadingCtrl.create({
          message: 'Validando...',
          spinner: 'bubbles'
        });
        loading.present();
        this.userForm.name = forma.value.email;
        this.userForm.password = forma.value.clave;
        let dataa = await this.loginService.login(this.userForm)
            .then(async (data: any) => {
              loading.dismiss();
              if(data==null)
              {
                let toast = await this.toastCtrl.create({
                  message: 'Usuario o contraseña incorrecta.',
                  duration: 3000,
                  position: "middle"
                });
                toast.present();
              }
              else
              {
                let loginValid = false;
                data.forEach(function (value) {
                  if(value.email === forma.value.email && value.contrasena === forma.value.clave)
                  {//this.storage.set('userData', JSON.stringify(data));
                    loginValid = true;
                  }
                });
                if(loginValid){
                  this.navCtrl.navigateRoot('menu-principal');
                }
                else
                {
                  let toast = await this.toastCtrl.create({
                    message: 'Usuario o contraseña incorrecta.',
                    duration: 3000,
                    position: "middle"
                  });
                  toast.present();
                }
              }
          });
      }
    }
}

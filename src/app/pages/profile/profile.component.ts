import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile/profile.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/item';
import { SwitchUserService } from 'src/app/core/services/modalUs/switch-user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: User | null = null;
  users: User[] = [];

  constructor(private modalUser: SwitchUserService,
    private router: Router,
    private route: ActivatedRoute,
    private ProfileService: ProfileService,
    private AuthService: AuthService) { }

  isModalVisible !: boolean;

  ngOnInit(): void {

    this.modalUser.$modal.subscribe((valu) => { this.isModalVisible = valu })

    this.dataUser();
  }

  dataUser() {
    // Obtiene el ID del usuario logueado desde el servicio de autenticación
    const loggedInUserId = this.AuthService.getLoggedInUserId();
    console.log('loggedInUserId:', loggedInUserId);

    if (loggedInUserId) {
      this.route.paramMap.subscribe(paramMap => {

        // Obtiene el ID de usuario de la URL
        const id = paramMap.get('id');
        console.log('Id Login: ', id)

        // Comprueba si el ID de usuario de la URL coincide con el usuario logueado
        if (id === loggedInUserId) {
          // Obtiene los datos del usuario desde el servicio de perfil
          this.ProfileService.getUser(id).subscribe(data => {
            this.user = data;
            console.log(data)

          });
        } else {
          console.error('Error ids diferentes no coinciden')
          // this.router.navigate(['/error']);
        }
      });
    }
  }

  openModal() {

    this.isModalVisible = true
  }
}

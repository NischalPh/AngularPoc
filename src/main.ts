import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UserProfileComponent } from './app/components/user-profile/user-profile.component';

bootstrapApplication(UserProfileComponent, appConfig)
  .catch((err) => console.error(err));

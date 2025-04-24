import { Component } from '@angular/core';

@Component({
  selector: 'app-settingd',
  templateUrl: './settingd.component.html',
  styleUrl: './settingd.component.css'
})
export class SettingdComponent {

  user = {
    name: 'Pilot',
    email: 'pilot@example.com',
    phone: '+254 700 000000',
    location: 'Nairobi, Kenya',
    bio: 'Drone enthusiast and operator.',
    avatar: 'https://i.pravatar.cc/150?img=3',
    social: {
      linkedin: '',
      twitter: '',
      github: ''
    },
    cv: null
  };

  newPassword = '';
  confirmPassword = '';
  selectedLanguage = 'en';
  notifications = {
    email: true,
    sms: false
  };
  theme = 'light';

  onAvatarChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Handle avatar upload logic here
    }
  }

  onCVUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.user.cv = file;
    }
  }

  resetPassword() {
    if (this.newPassword === this.confirmPassword) {
      // Implement password reset logic here
    } else {
      alert('Passwords do not match.');
    }
  }

  saveSettings() {
    // Implement save settings logic here
    alert('Settings saved successfully!');
  }
}

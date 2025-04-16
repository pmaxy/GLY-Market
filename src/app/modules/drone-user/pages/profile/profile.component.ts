import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  isEditing: boolean = false;  // Toggle between view and edit mode

  userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://i.pravatar.cc/300',
    dateOfBirth: '1990-01-01',
    location: 'New York, USA',
    bio: 'Software Developer | Tech Enthusiast | Passionate about Learning',
    phone: '123-456-7890',
    socialMedia: 'https://github.com/johndoe',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  ngOnInit(): void {
    // Normally, you'd fetch the user profile from an API here.
  }

  toggleEditMode() {
    this.isEditing = !this.isEditing;  // Toggle between view and edit modes
  }

  onProfileSubmit() {
    // Handle profile submission logic here (e.g., save changes to the backend)
    console.log('Profile updated:', this.userProfile);
    this.toggleEditMode();
  }

  onPasswordChangeSubmit() {
    if (this.userProfile.newPassword === this.userProfile.confirmPassword) {
      // Handle password change logic here (e.g., update password in the backend)
      console.log('Password changed');
    } else {
      console.error('Passwords do not match');
    }
  }
}

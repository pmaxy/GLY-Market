import { Component, OnInit } from '@angular/core';
interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
}

interface CV {
  name: string;
  url: string;
}

interface User {
  avatar: string;
  name: string;
  title: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
  social: SocialLinks;
  cv?: CV;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User = {
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'Jane Doe',
    title: 'Software Engineer',
    location: 'Nairobi, Kenya',
    bio: 'Passionate developer with a knack for creating intuitive user experiences.',
    email: 'jane.doe@example.com',
    phone: '+254 712 345678',
    social: {
      linkedin: 'https://linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/janedoe',
      github: 'https://github.com/janedoe'
    },
    cv: {
      name: 'Jane_Doe_CV.pdf',
      url: '/assets/cv/Jane_Doe_CV.pdf'
    }
  };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can be added here
  }

  editProfile(): void {
    // Logic to navigate to the profile edit page or open a modal
    console.log('Edit profile clicked');
  }

  downloadCV(): void {
    if (this.user.cv) {
      window.open(this.user.cv.url, '_blank');
    }
  }
}
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {

  chats = [
    {
      id: 1,
      name: 'Jane Doe',
      profilePic: 'https://i.pravatar.cc/100?img=1',
      lastMessage: 'Hey! Are you available tomorrow?',
      lastMessageTime: '10:45 AM',
      messages: [
        { from: 'them', text: 'Hey there!', time: '10:30 AM' },
        { from: 'me', text: 'Hey! Are you available tomorrow?', time: '10:45 AM' },
      ]
    },
    {
      id: 2,
      name: 'John Smith',
      profilePic: 'https://i.pravatar.cc/100?img=2',
      lastMessage: 'Let’s finalize that map.',
      lastMessageTime: 'Yesterday',
      messages: [
        { from: 'them', text: 'Let’s finalize that map.', time: 'Yesterday' },
      ]
    }
  ];

  selectedChat = this.chats[0];
  newMessage = '';
  mobileView = window.innerWidth < 640;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.mobileView = (event.target as Window).innerWidth < 640;
  }

  selectChat(chat: any) {
    this.selectedChat = chat;
  }

  backToList() {
    this.selectedChat = null!;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.selectedChat.messages.push({
        from: 'me',
        text: this.newMessage,
        time: 'Now'
      });
      this.newMessage = '';
    }
  }
}

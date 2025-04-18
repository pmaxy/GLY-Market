import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
type AnimationType = 
| 'fade-up'
| 'slide-left'
| 'zoom-in'
| 'fade-right'
| 'slide-up'
| 'zoom-out';
@Directive({
  selector: '[appGsapScroll]'
})
export class GsapScrollDirective implements OnInit {


@Input() animationType!: AnimationType;


  @Input() delay = 0;

  constructor(private el: ElementRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    const element = this.el.nativeElement;
    const animProps = this.getAnimationProps(this.animationType);

    gsap.from(element, {
      ...animProps,
      delay: this.delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
        scrub: true, // Set to true for slow-mo scroll effect
      }
    });
  }

  private getAnimationProps(type: string) {
    switch (type) {
      case 'fade-up':
        return { opacity: 0, y: 25, duration: 1, ease: 'power2.out' };
  
      case 'slide-left':
        return { opacity: 0, x: 100, duration: 1.5, ease: 'power3.out' };
  
      case 'zoom-in':
        return { scale: 0.8, opacity: 0, duration: 1.5, ease: 'back.out(1.7)' };
  
      case 'slide-up':
        return { opacity: 0, y: 100, duration: 1.2, ease: 'power3.out' };
  
      case 'fade-right':
        return { opacity: 0, x: -50, duration: 1.5, ease: 'power2.out' };
  
      case 'zoom-out':
        return { scale: 1.2, opacity: 0, duration: 1.5, ease: 'power1.out' };
  
      default:
        return {};
    }
  }
  
}

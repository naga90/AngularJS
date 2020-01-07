import { Directive, ElementRef, HostListener } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appFancyBox]'
})
export class FancyboxDirective {

  constructor(private el: ElementRef) { 
  	$(this.el.nativeElement).fancybox({
        openEffect  : "fade",
        closeEffect : "fade",
        type : "image",
        prevEffect		: 'none',
        nextEffect		: 'none',
        loop : false,
        helpers		: {
          title	: { type : 'inside' },
          buttons	: {}
        }
    });
  }

}

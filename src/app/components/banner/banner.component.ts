import { Component, ElementRef, ViewChild, AfterViewInit , Renderer2} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @ViewChild('utilityBarText') utilityBarText! : ElementRef; 
  
  constructor(private renderer: Renderer2){}

  ngAfterViewInit(){
    const textWidth =this.utilityBarText.nativeElement.offsetWidth;
    const duration = textWidth /50;
    this.renderer.setStyle(this.utilityBarText.nativeElement, 'animationDuration', `${duration}s`)
  }
}

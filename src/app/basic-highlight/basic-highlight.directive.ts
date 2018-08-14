import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
	// Using the [] recognize the directive in the html elemetn
	selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit{
	constructor(private elementRef : ElementRef) {
		
	}

	ngOnInit() {
		this.elementRef.nativeElement.style.backgroundColor = 'green';
	}
}
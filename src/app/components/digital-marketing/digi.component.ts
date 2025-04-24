import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'scoss-digi',
  templateUrl: './digi.component.html',
  styleUrl: './digi.component.scss'
})
export class DigiComponent {
digicomonent: TemplateRef<{ details: { header: string; icon: string; discription: string; keyfeatures: string; btn: string; }; }> | null | undefined;
pargraph: any;

}

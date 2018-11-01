import { Component, OnInit } from '@angular/core';
import { AceEditorModule } from 'ng2-ace-editor';
@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.sass']
})
export class CodeComponent implements OnInit {
  public text: string = "function(){alert}"

  constructor(private ace: AceEditorModule) { }
  ngOnInit() {
  }

}

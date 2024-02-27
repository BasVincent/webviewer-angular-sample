import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import WebViewer from "@pdftron/webviewer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('viewer') viewerRef!: ElementRef;
  private token = 'oldToken';

  ngOnInit() {
    // initiate token refresh after 10 seconds
    setTimeout(() => this.refreshToken(), 10 * 1000)
  }

  ngAfterViewInit(): void {
  WebViewer({
    path: '../assets/lib',
    enableAnnotations: true,
    mobileRedirect: false,
    disableLogs: false,
    backendType: 'ems',
  }, this.viewerRef.nativeElement).then(instance => {
    const { UI } = instance;

    let url = `../testDocument.pdf`;

    const options = {
      customHeaders: { Authorization: `Bearer ${this.token}` },
    };

    UI.loadDocument(url, options);
  })
}

  // Simulate the token being refreshed.
  private refreshToken() {
    this.token = 'newToken'
  }
}

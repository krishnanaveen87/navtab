import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>  
  <tabs>
      <tab title="OverView">
      <h3>POPULAR TEMPLATES</h3>

      <div class="topdiv">
        <div class="smallDiv"> 
        <img src="./assets/angular.jpg" />
        <div class="smalTxt">Angular </div>
        </div>
        <div class="smallDiv"> 
        <img src="./assets/react.png" />
        <div class="smalTxt">React </div>
        </div>
        <div class="smallDiv"> 
        <img src="./assets/vailla.png" />
        <div class="smalTxt">Vanilla </div>
        </div>
        <div class="smallDiv"> 
        <img src="./assets/vlu.png" />
        <div class="smalTxt">Vue </div>
        </div>
      </div>
      <div class="topdiv">
        <div class="smallDiv"> 
        <img src="./assets/gatsby.png" />
        <div class="smalTxt">Gatsby </div>
        </div>
        <div class="smallDiv"> 
        <img src="./assets/next.png" />
        <div class="smalTxt">Nextjs </div>
        </div>
        <div class="smallDiv"> 
        <img src="./assets/node.png" />
        <div class="smalTxt">Node </div>
        </div>
        <div class="smallDiv"> 
        <img src="./assets/nuxt.png" />
        <div class="smalTxt">Nuxtjs </div>
        </div>
      </div>
      <div class="topdiv">
        <div class="smallDiv"> 
        <img src="./assets/unibit.jpg" />
        <div class="smalTxt">Unibit </div>
        </div>
        <div class="smallDiv"> 
        <img src="./assets/react.png" />
        <div class="smalTxt">React +TS </div>
        </div>
        <div class="smallDiv"> 
        <img src="./assets/vailla.png" />
        <div class="smalTxt">Vanilla + TS</div>
        </div>
   
        
      </div>

      </tab>
      <tab title="My templates">Tab 2 Content</tab>
      <tab title="client templates">Tab 3 Content</tab>
      <tab title="Container templates">Tab 4 Content</tab>
      <tab title="import">Tab 5 Content</tab>
    </tabs>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-root';
}

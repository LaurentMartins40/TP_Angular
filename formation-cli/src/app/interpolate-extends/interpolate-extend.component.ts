import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';
@Component({
    selector: 'app-interpolate-extend',
    templateUrl: './interpolate-extend.component.html',
    styleUrls: ['./interpolate-extend.component.css']
})
export class InterpolateExtendComponent implements OnInit {
    nom: string = 'Bewizyu'
    formationAngular: string = 'Module angular';
    formation: Formation = new Formation('Module Angular', 'fghjkvghghgch,cghgjcgjgjvgjvjgg,jvbbj;vb;bnbn,bn,vbnvbn,,vbnvbnvbn,vn,vnvbnvn,');
    getTitle(): string {
        return `Function: ${this.nom} => ${this.formationAngular} `
    }
    constructor() { }
    ngOnInit() {
    }
}
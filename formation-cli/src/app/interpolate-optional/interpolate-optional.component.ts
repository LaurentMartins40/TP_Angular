import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/Formation';
@Component({
    selector: 'app-interpolate-optional',
    templateUrl: './interpolate-optional.component.html',
    styleUrls: ['./interpolate-optional.component.css']
})
export class InterpolateOptionalComponent implements OnInit {
    ngOnInit(): void {
        setTimeout(() => {
            this.formationJS = new Formation('Module JavaScript', "");
        }, 3000)

    }
    nom: string = 'Bewizyu'
    formationAngular: string = 'Module angular';
    formation: Formation = new Formation('Module Angular', "dfsdfsdfsdhfghgfgggqgrerztyjryetvyze-u(yzeytryj zr zvyy");
    formationJS: Formation;
    getTitle(): string {
        return `Function: ${this.nom} => ${this.formationAngular} `
    }
    constructor() { }
}
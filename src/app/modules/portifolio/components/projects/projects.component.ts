import { Component, inject, signal } from '@angular/core'
import { IProjects } from '../../interface/IProjects.intereface'

import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum'
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component'
@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [MatDialogModule, DialogProjectsComponent],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    #dialog = inject(MatDialog)

    public arrayProjects = signal<IProjects[]>([
        {
            src: 'assets/img/projects/vfull.png',
            alt: '',
            title: 'Projeto 1',
            width: '100px',
            height: '51px',
            description:
                '<p>Projeto para fazer um portifólio simples para estudo de AngularJS.</p>',
            links: [
                {
                    name: 'Conheça o Blog',
                    href: '',
                },
            ],
        },
    ])

    public openDialog(data: IProjects) {
        this.#dialog.open(DialogProjectsComponent, {
            data,
            panelClass: EDialogPanelClass.PROJECTS,
        })
    }
}

import { Component, signal } from '@angular/core'
import { IProjects } from '../../interface/IProjects.intereface'

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
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
}

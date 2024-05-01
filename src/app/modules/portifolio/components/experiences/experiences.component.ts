import { Component, signal } from '@angular/core'
import { IExperienceInterface } from '../../interface/IExperienceInterface.interface'

@Component({
    selector: 'app-experiences',
    standalone: true,
    imports: [],
    templateUrl: './experiences.component.html',
    styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
    public arrayExperiences = signal<IExperienceInterface[]>([
        {
            summary: {
                strong: 'Engenheiro de Software',
                p: 'Massive Economics | Abril 2024 - Presente',
            },
            text: '<p>Atuo na plataforma web da Massive. Tanto no frontend, com AngularJS, quanto na parte de backend com C# e .NET Core, alocado na Azure.</p>',
        },
        {
            summary: {
                strong: 'Engenheiro de Software',
                p: 'Trivento Educação | Fevereiro 2022 - Abril 2024',
            },
            text: '<p>Atuei como engenheiro de software para aprimorar e implementar novas ferramentas, atendendo tanto os alunos, quanto os professores e funcionários da instituição.</p>',
        },
    ])
}

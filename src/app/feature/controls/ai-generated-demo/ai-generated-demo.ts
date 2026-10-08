import { Component } from '@angular/core';
import { JellyContainer } from '@core/jelly-container';
import { CodeColoring } from '@core/code-coloring';

@Component({
  imports: [JellyContainer, CodeColoring],
  selector: 'prb-ai-generated-demo',
  styleUrl: './ai-generated-demo.scss',
  templateUrl: './ai-generated-demo.html',
})
export class AiGeneratedDemo {}

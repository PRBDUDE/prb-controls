import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@core/footer';
import { Header } from '@core/header';
import { Layout } from '@core/layout';
import { Content } from '@core/content/content';
import { Menu } from '@core/menu';

@Component({
  selector: 'prb-root',
  imports: [RouterOutlet, Footer, Header, Layout, Content, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('prb-controls');
}

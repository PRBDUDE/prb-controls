import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ThemeToggle } from '@core/theme-toggle';

@Component({
  selector: 'prb-header',
  imports: [NgOptimizedImage, ThemeToggle, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}

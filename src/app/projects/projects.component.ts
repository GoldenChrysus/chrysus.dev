/**
 *
 * Copyright (C) 2022  Patrick D. Golden, @GoldenChrysus (at GitHub.com), chrysus.dev, or associated affiliates
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { Component, OnInit } from '@angular/core';
import { Project } from './project/project.component';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.sass'],
	host: { id: "projects" }
})
export class ProjectsComponent implements OnInit {
	projects: Project[] = [];

	constructor() {
	}

	ngOnInit(): void {
		this.projects = [
			{
				title : "karutasrs",
				type  : "website",
				url   : "https://karutasrs.com",
				repo  : "https://github.com/GoldenChrysus/KarutaSRS",
				tech  : [
					"emberjs",
					"ruby_on_rails",
					"postgresql",
					"json_api"
				]
			},
			{
				title : "chesshq",
				type  : "website",
				url   : "https://chesshq.com",
				repo  : "https://github.com/GoldenChrysus/srschess",
				tech  : [
					"react",
					"typescript",
					"ruby_on_rails",
					"python",
					"postgresql",
					"graphql",
					"stripe"
				]
			},
			{
				title : "ember_overlay",
				type  : "web_app",
				url   : "https://goldenchrysus.github.io/ffxiv/ember-overlay",
				repo  : "https://github.com/GoldenChrysus/ffxiv-ember-overlay",
				tech  : [
					"react",
					"python",
					"c_sharp"
				]
			}
		];
	}
}

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
import { Skill } from './skill/skill.component';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
	skills: Skill[] = [];

	constructor() {
	}

	ngOnInit(): void {
		this.skills = [
			{
				name  : "php",
				level : 100,
				background : "#7377ad"
			},
			{
				name : "javascript",
				level : 100,
				background : "#efd81d",
				text: "black"
			},
			{
				name : "typescript",
				level : 100,
				background : "#2f74c0"
			},
			{
				name : "postgresql",
				level : 100,
				background : "#31648c",
			},
			{
				name : "sql_server",
				level : 100,
				background : "#e14b46",
			},
			{
				name : "graphql",
				level : 90,
				background : "#d932a2",
			},
			{
				name : "ruby",
				level : 85,
				background : "#e01520",
			},
			{
				name : "python",
				level : 85,
				background : "#f1cd43",
				text : "black"
			},
			{
				name : "mysql",
				level : 75,
				background : "#d88700"
			},
			{
				name : "c_sharp",
				level : 60,
				background : "#260063"
			},
			{
				name : "java",
				level : 60,
				background : "#e01e23"
			},
			{
				name : "aws",
				level : 50,
				background : "#f28f00"
			},
			{
				name : "docker",
				level : 50,
				background : "#228fe1"
			},
			{
				name : "google_cloud",
				level : 50,
				background : "#de4032"
			}
		];
	}
}

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
import { Social } from './social/social.component';
import { RESUME_PATH } from 'src/app/header/header.component';

@Component({
	selector: 'app-socials',
	templateUrl: './socials.component.html',
	styleUrls: ['./socials.component.sass'],
})
export class SocialsComponent implements OnInit {
	socials: Social[] = [];

	constructor() { }

	ngOnInit(): void {
		this.socials = [
			{
				icon : "github",
				url  : "https://github.com/GoldenChrysus/",
			},
			{
				icon : "linkedin",
				url  : "https://www.linkedin.com/in/goldenpatrick/",
			},
			{
				icon : "envelope",
				url  : "mailto:public@chrysus.dev",
			},
			{
				icon : "id-card",
				url  : RESUME_PATH,
			}
		];
	}
}


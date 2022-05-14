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

@Component({
	selector: 'app-availability',
	templateUrl: './availability.component.html',
	styleUrls: ['./availability.component.sass'],
	host: { id: "availability" }
})
export class AvailabilityComponent implements OnInit {
	items: {[key: string]: Item} = {};

	constructor() { }

	ngOnInit(): void {
		this.items = {
			employment : {
				emoji     : "✔️",
				direction : "left"
			},
			freelance : {
				emoji     : "❌",
				direction : "right"
			}
		};
	}
}

enum Direction {
	left,
	right,
	top,
	bottom
}

interface Item {
	emoji: string,
	direction: keyof typeof Direction
}

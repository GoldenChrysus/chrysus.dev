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
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { NgsRevealService } from 'ngx-scrollreveal';
import { MenuItem } from "primeng/api";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterViewInit {
	@ViewChild("header", { static: false }) header: ElementRef<HTMLElement> | undefined;

	items: MenuItem[] = [];

	constructor(@Inject(I18NEXT_SERVICE) private i18n: ITranslationService, private reveal: NgsRevealService) {
	}

	ngOnInit(): void {
		this.items = [
			{
				label   : this.i18n.t("about"),
				icon    : "pi pi-user",
				command : () => this.onClick("about")
			},
			{
				label   : this.i18n.t("projects"),
				icon    : "pi pi-desktop",
				command : () => this.onClick("projects"),
			},
			{
				label   : this.i18n.t("availability"),
				icon    : "pi pi-calendar",
				command : () => this.onClick("availability"),
			},
			{
				label : this.i18n.t("email_me"),
				icon  : "pi pi-envelope",
				url   : "mailto:public@chrysus.dev"
			},
			{
				label  : this.i18n.t("resume"),
				icon   : "pi pi-id-card",
				target : "_blank",
				url    : RESUME_PATH
			}
		];
	}

	ngAfterViewInit(): void {
		if (this.header) {
			const mobile_button = this.header.nativeElement.querySelector(".p-menubar-button");

			if (!mobile_button || window.getComputedStyle(mobile_button).display === "none") {
				this.reveal.revealSet(this.header, ".p-menuitem", 100, { origin: "top", distance: "10em" });
			}
		}
	}

	onClick(fragment: string) {
		document.getElementById(fragment)?.scrollIntoView({ behavior : "smooth" });
	}
}

export const RESUME_PATH = "/assets/files/Patrick_Golden_public_resume.pdf";
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
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';
import { NgsRevealService } from 'ngx-scrollreveal';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'chrysus.dev';
	lang: string | null = null;
	show  = true;

	private after_reveal: Subscription | undefined;
	private init_sub: Subscription | undefined;
	private language_sub: Subscription | undefined;

	constructor(private reveal: NgsRevealService, @Inject(I18NEXT_SERVICE) private i18n: ITranslationService) { }

	ngOnInit(): void {
		this.after_reveal = this.reveal.afterReveal$.subscribe(
			(el: HTMLElement) => {
				el.querySelectorAll(".revealable").forEach((v: Element) => {
					v.classList.add("revealed");
				})
			}
		);

		this.init_sub = this.i18n.events.initialized.subscribe(data => {
			this.lang = data.lang;
		});

		this.language_sub = this.i18n.events.languageChanged.subscribe(lang => {
			if (lang === this.lang) {
				return;
			}

			const prev = this.lang ?? "";

			this.lang = lang;

			if (String(prev) === "") {
				return;
			}

			setTimeout(() => this.show = false);
			setTimeout(() => this.show = true);
		});
	}

	ngOnDestroy(): void {
		this.after_reveal?.unsubscribe();
		this.init_sub?.unsubscribe();
		this.language_sub?.unsubscribe();
	}
}

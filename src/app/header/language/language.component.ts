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
import { Component, Inject, OnInit } from '@angular/core';
import { I18NEXT_SERVICE, ITranslationService } from 'angular-i18next';

@Component({
	selector: 'app-language',
	templateUrl: './language.component.html',
	styleUrls: ['./language.component.sass']
})
export class LanguageComponent implements OnInit {
	lang: string = "";

	constructor(@Inject(I18NEXT_SERVICE) private i18n: ITranslationService) { 
	}

	ngOnInit(): void {
		this.lang = this.i18n.language;
	}

	changeLang(lang: string) {
		this.i18n.changeLanguage(lang);
		localStorage.setItem("lang", lang);

		this.lang = lang;
	}
}

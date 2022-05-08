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
import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { I18NEXT_SERVICE, ITranslationService } from "angular-i18next";
import { APP_INITIALIZER, LOCALE_ID } from "@angular/core";

const ALLOWED_LOCALES: Array<string> = [
	"en",
	"ja"
];

let saved_locale = localStorage.getItem("lang") ?? "";

if (!ALLOWED_LOCALES.includes(saved_locale)) {
	const browser_locale = Intl.DateTimeFormat().resolvedOptions().locale;

	saved_locale = (browser_locale.substring(0, 2) === "ja") ? "ja" : "en";
}

export function i18init(i18next: ITranslationService) {
	return () =>
		i18next
			.use(resourcesToBackend((language, namespace, callback) => {
				import("../assets/locales/" + namespace + "/" + language + ".json")
					.then((resources) => {
						callback(null, resources);
					})
					.catch((error) => {
						callback(error, null);
					})
			}))
			.init({
				fallbackLng   : "en",
				lng           : saved_locale,
				ns            : ["common", "home", "about", "projects"],
				interpolation : {
					format      : function(value, format) {
						if (format === "lowercase") {
							value = (value ?? "").toLowerCase();
						}
						
						if (format === "number") {
							value = (!isNaN(value)) ? new Intl.NumberFormat().format(value) : value;
						}
		
						return value;
					}
				}
			});
}

export function localeIdFactory(i18next: ITranslationService) {
	return i18next.language;
}

export const I18N_PROVIDERS = [
	{
		provide    : APP_INITIALIZER,
		useFactory : i18init,
		deps       : [I18NEXT_SERVICE],
		multi      : true
	},
	{
		provide    : LOCALE_ID,
		deps       : [I18NEXT_SERVICE],
		useFactory : localeIdFactory
	}
];
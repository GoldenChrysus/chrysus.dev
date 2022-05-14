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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { I18NextModule } from 'angular-i18next';
import { NgsRevealConfig, NgsRevealModule } from 'ngx-scrollreveal';
import { MenubarModule } from "primeng/menubar";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { ChipModule } from "primeng/chip";
import { StyleClassModule } from "primeng/styleclass";

import { AppRoutingModule } from './app-routing.module';

import { I18N_PROVIDERS } from './i18n';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './about/skills/skills.component';
import { SkillComponent } from './about/skills/skill/skill.component';
import { DividerComponent } from './divider/divider.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { SocialsComponent } from './hero/socials/socials.component';
import { SocialComponent } from './hero/socials/social/social.component';
import { LanguageComponent } from './header/language/language.component';
import { HomeComponent } from './home/home.component';;
import { AvailabilityComponent } from './availability/availability.component'

@NgModule({
	declarations: [
		AppComponent,
		HeroComponent,
		HeaderComponent,
		AboutComponent,
		SkillsComponent,
		SkillComponent,
		DividerComponent,
		ProjectsComponent,
		ProjectComponent,
		SocialsComponent,
		SocialComponent,
		LanguageComponent,
		HomeComponent,
		AvailabilityComponent
	],
	imports: [
		NgsRevealModule,

		BrowserModule,
		AppRoutingModule,
		I18NextModule.forRoot(),

		StyleClassModule,
		MenubarModule,
		CardModule,
		DividerModule,
		ChipModule
	],
	providers: [
		I18N_PROVIDERS,
		NgsRevealConfig
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(config: NgsRevealConfig) {
		config.viewOffset = {
			top    : 0,
			right  : 0,
			bottom : 100,
			left   : 0
		};

		config.viewFactor = 0.1;
	}
 }

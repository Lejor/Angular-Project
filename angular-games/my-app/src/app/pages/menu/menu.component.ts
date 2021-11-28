import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[] = [];

    constructor() { }

    ngOnInit(): void {

        this.items = [

            {
                label: 'Coletaton',
                routerLink: 'marca',
                queryParams: {
                    marca: 'Coletaton'
                },

                items: [
                    {
                        "label": "Super Mario Galaxy",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Coletaton",
                            "modelo": "Super Mario Galaxy",

                        }
                    },
                    {
                        "label": "uper Mario Galaxy II",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Coletaton",
                            "modelo": "uper Mario Galaxy II",

                        }
                    },
                    {
                        "label": "Super Mario Odyssey",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Coletaton",
                            "modelo": "Super Mario Odyssey",
                        }
                    },
                    {
                        "label": "Yooka-Layele",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
        
                            "marca": "Coletaton",
                            "modelo": "Yooka-Layele",
                        }
                    },
                    {
                        "label": "Banjo-Kazooie",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Coletaton",
                            "modelo": "Banjo-Kazooie",
                        }
                    },
                    {
                        "label": "A Hat in Time",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Coletaton",
                            "modelo": "A Hat in Time"
                        }
                    },
                    {
                        "label": "Super Mario 3D Land",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Coletaton",
                            "modelo": "Super Mario 3D Land"
                        }
                    },
                    {
                        "label": "Super Mario 3D World",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Coletaton",
                            "modelo": "Super Mario 3D World"
                        }
                    },
                    {
                        "label": "Donkey Kong",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Coletaton",
                            "modelo": "Donkey Kong"
                        }
                    },
                    {
                        "label": "A Lenda do Herói",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Coletaton",
                            "modelo": "A Lenda do Herói"
                        }
                    }
                ]
            },

            {
                label: 'FPS',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'FPS'
                },
                items: [
                    {
                        label: 'Counter Strike: Global Offensive',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Counter Strike: Global Offensive',
                            marca: 'FPS'
                        }
                    },
                    {
                        label: 'Call of Duty: World War II',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Call of Duty: World War II',
                            marca: 'FPS'

                        }
                    },
                    {
                        label: 'Battlefield 2042',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'FPS',
                            modelo: 'Battlefield 2042'
                        }
                    },
                    {
                        label: 'Overwatch',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'FPS',
                            modelo: 'Overwatch'
                        }
                    },
                    {
                        label: 'Valorant',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'FPS',
                            modelo: 'Valorant'
                        }
                    },
                    {
                        label: 'Doom Eternal',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'FPS',
                            modelo: 'Doom Eternal'
                        }
                    },
                    {
                        label: 'Metroid Prime 3',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'FPS',
                            modelo: 'Metroid Prime 3'
                        }
                    },
                    {
                        label: '007 Goldeneye',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'FPS',
                            modelo: '007 Goldeneye'
                        }
                    },
                    {
                        label: 'Paladins',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'FPS',
                            modelo: 'Paladins'
                        }
                    },
                    {
                        label: 'Call of Duty: Black Ops 2',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            marca: 'FPS',
                            modelo: 'Call of Duty: Black Ops 2'
                        }
                    },

                ]
            },

            {

                label: 'Luta',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Luta'
                },
                items: [
                    {
                        label: 'Mortal Kombat 12',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Mortal Kombat 12',
                            marca: 'Luta'
                        }
                    },
                    {
                        label: 'Street Fighter V',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Street Fighter V',
                            marca: 'Luta'
                        }
                    },
                    {
                        label: 'The King of Fighters',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'The King of Fighters',
                            marca: 'Luta'
                        }
                    },
                    {
                        label: 'Fatal Fury',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Fatal Fury',
                            marca: 'Luta'
                        }
                    },
                    {
                        label: 'Super Smash Bros for 3DS',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Super Smash Bros for 3DS',
                            marca: 'Luta'
                        }
                    },
                    {
                        label: 'Super Smash Bros Ultimate',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Super Smash Bros Ultimate',
                            marca: 'Luta'
                        }
                    },
                    {
                        label: 'Injustice',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Injustice',
                            marca: 'Luta'
                        }
                    },
                    {
                        label: 'Injustice 2',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Injustice 2',
                            marca: 'Luta'
                        }
                    },
                    {
                        label: 'Brawhalla',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Brawhalla',
                            marca: 'Luta'
                        }
                    },
                    {
                        label: 'Dragon Ball Fighter Z',
                        icon: 'pi pi-fw pi-check',
                        routerLink: 'exibicao',
                        queryParams: {
                            modelo: 'Dragon Ball Fighter Z',
                            marca: 'Luta'
                        }
                    },


                ]
            },

            {
                label: 'Metroidvania',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Metroidvania'
                },

                items: [
                    {
                        "label": "Hollow Knight",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Metroidvania",
                            "modelo": "Hollow Knight"
                        }
                    },
                    {
                        "label": "Metroid Dread",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Metroidvania",
                            "modelo": "Metroid Dread"
                        }
                    },
                    {
                        "label": "Castlevania Symphony of the Night",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Metroidvania",
                            "modelo": "Castlevania Symphony of the Night"
                        }
                    },
                    {
                        "label": "Kirby and the Amazing Mirror",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Metroidvania",
                            "modelo": "Kirby and the Amazing Mirror"
                        }
                    },
                    {
                        "label": "Dead Cells",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "url": "https://cdn.motor1.com/images/mgl/1l8Mp/s1/4x3/ford-ka-e-ka-sedan-2019.webp",
                            "marca": "Metroidvania",
                            "modelo": "Dead Cells",
                            "imgMarca": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png"
                        }
                    },
                    {
                        "label": "Ori and the Blind Forest",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Metroidvania",
                            "modelo": "Ori and the Blind Forest"
                        }
                    },
                    {
                        "label": "Ori and the Will of the Wisps",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Metroidvania",
                            "modelo": "Ori and the Will of the Wisps"
                        }
                    },
                    {
                        "label": "Dandara",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Metroidvania",
                            "modelo": "Dandara"
                        }
                    },
                    {
                        "label": "Bloodstained: Ritual of the Night",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Metroidvania",
                            "modelo": "Bloodstained: Ritual of the Night"
                        }
                    },
                    {
                        "label": "Blasphemous",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Metroidvania",
                            "modelo": "Blasphemous"
                        }
                    }
                ]
            },

            {
                label: 'Mundo Aberto',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Mundo Aberto'
                },

                items: [
                    {
                        "label": "The Legend of Zelda: Breath of the Wild",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Mundo Aberto",
                            "modelo": "The Legend of Zelda: Breath of the Wild"
                        }
                    },
                    {
                        "label": "The Witcher 3",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Mundo Aberto",
                            "modelo": "The Witcher 3"
                        }
                    },
                    {
                        "label": "Immortals: Fenyx Rising",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Mundo Aberto",
                            "modelo": "Immortals: Fenyx Rising"
                        }
                    },
                    {
                        "label": "The Elder Scrolls V: Skyrim",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Mundo Aberto",
                            "modelo": "The Elder Scrolls V: Skyrim"
                        }
                    },
                    {
                        "label": "Horizon: Zero Dawn",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Mundo Aberto",
                            "modelo": "Horizon: Zero Dawn"
                        }
                    },
                    {
                        "label": "The Elder Scroll IV: Oblivion",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Mundo Aberto",
                            "modelo": "The Elder Scroll IV: Oblivion"
                        }
                    },
                    {
                        "label": "Genshin Impact",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Mundo Aberto",
                            "modelo": "Genshin Impact"
                        }
                    },
                    {
                        "label": "Minecraft",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Mundo Aberto",
                            "modelo": "Minecraft"
                        }
                    },
                    {
                        "label": "GTA V",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Mundo Aberto",
                            "modelo": "GTA V",
                        }
                    },
                    {
                        "label": "Red Dead Redemption 2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                           
                            "marca": "Mundo Aberto",
                            "modelo": "Red Dead Redemption 2",
                        }
                    }
                ]
            },  

            {
                label: 'Plataforma',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Plataforma'
                },

                items: [
                    {
                        "label": "Super Mario Bros 2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                           
                            "marca": "Plataforma",
                            "modelo": "Super Mario Bros 2"
                        }
                    },
                    {
                        "label": "Donkey Kong Country: Tropical Freeze",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Plataforma",
                            "modelo": "Donkey Kong Country: Tropical Freeze"
                        }
                    },
                    {
                        "label": "Kirby Star Allies",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Plataforma",
                            "modelo": "Kirby Star Allies"
                        }
                    },
                    {
                        "label": "Spelunker",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Plataforma",
                            "modelo": "Spelunker"
                        }
                    },
                    {
                        "label": "Yooka-Layle and the Impossible Lair",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Plataforma",
                            "modelo": "Yooka-Layle and the Impossible Lair"
                        }
                    },
                    {
                        "label": "Super Mario World",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Plataforma",
                            "modelo": "Super Mario World"
                        }
                    },
                    {
                        "label": "New Super Mario Bros U",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Plataforma",
                            "modelo": "New Super Mario Bros U"
                        }
                    },
                    {
                        "label": "Celeste",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Plataforma",
                            "modelo": "Celeste"
                        }
                    },
                    {
                        "label": "Super Chicken Jumper",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Plataforma",
                            "modelo": "Super Chicken Jumper"
                        }
                    },
                    {
                        "label": "Gris",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Plataforma",
                            "modelo": "Gris"
                        }
                    }
                ]
            },  

            {
                label: 'RPG',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'RPG'
                },
            
                items: [
                    {
                        "label": "World of Warcraft",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG",
                            "modelo": "World of Warcraft"
                        }
                    },
                    {
                        "label": "Terraria",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG",
                            "modelo": "Terraria"
                        }
                    },
                    {
                        "label": "Ragnarök",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG",
                            "modelo": "Ragnarök"
                        }
                    },
                    {
                        "label": "Dungeons & Dragons",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG",
                            "modelo": "Dungeons & Dragons"
                        }
                    },
                    {
                        "label": "Diablo III",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG",
                            "modelo": "Diablo III"
                        }
                    },
                    {
                        "label": "Path of Exile",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG",
                            "modelo": "Path of Exile"
                        }
                    },
                    {
                        "label": "Baldurs Gate II",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG",
                            "modelo": "Baldurs Gate II"
                        }
                    },
                    {
                        "label": "Undertale",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG",
                            "modelo": "Undertale"
                        }
                    },
                    {
                        "label": "Cyberpunk 2077",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG",
                            "modelo": "Cyberpunk 2077"
                        }
                    },
                    {
                        "label": "Dragon Age: Origins",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG",
                            "modelo": "Dragon Age: Origins"
                        }
                    },
                    
                ]
            },
            
            {
                label: 'RPG Tático',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'RPG Tático'
                },
            
                items: [
                    {
                        "label": "Fallout 2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG Tático ",
                            "modelo": "Fallout 2"
                        }
                    },
                    {
                        "label": "Phantom Brave",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG Tático ",
                            "modelo": "Phantom Brave"
                        }
                    },
                    {
                        "label": "Fire Emblem",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG Tático ",
                            "modelo": "Fire Emblem"
                        }
                    },
                    {
                        "label": "Final Fantasy Tatics",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG Tático ",
                            "modelo": "Final Fantasy Tatics"
                        }
                    },
                    {
                        "label": "Fire Emblem: Three Houses",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG Tático ",
                            "modelo": "Fire Emblem: Three Houses"
                        }
                    },
                    {
                        "label": "Vandal Hearts",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG Tático ",
                            "modelo": "Vandal Hearts"
                        }
                    },
                    {
                        "label": "Tactics Ogre",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG Tático ",
                            "modelo": "Tactics Ogre"
                        }
                    },
                    {
                        "label": "Bomberman Wars",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG Tático ",
                            "modelo": "Bomberman Wars"
                        }
                    },
                    {
                        "label": "La Pucelle: Tactics",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG Tático ",
                            "modelo": "La Pucelle: Tactics"
                        }
                    },
                    {
                        "label": "Kartia",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG Tático ",
                            "modelo": "Kartia"
                        }
                    }
                ]
            },

            {
                label: 'RPG de Turno',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'RPG de Turno'
                },
            
                items: [
                    {
                        "label": "Kings Bounty: The Legend",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG de Turno",
                            "modelo": "Kings Bounty: The Legend"
                        }
                    },
                    {
                        "label": "The Banner Saga",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {                           
                            "marca": "RPG de Turno",
                            "modelo": "The Banner Saga"
                        }
                    },
                    {
                        "label": "Breath of Fire",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG de Turno",
                            "modelo": "Breath of Fire"
                        }
                    },
                    {
                        "label": "Chrono Trigger",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG de Turno",
                            "modelo": "Chrono Trigger"
                        }
                    },
                    {
                        "label": "Final Fantasy",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG de Turno",
                            "modelo": "Final Fantasy"
                        }
                    },
                    {
                        "label": "Darkest Dungeon",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG de Turno",
                            "modelo": "Darkest Dungeon"
                        }
                    },
                    {
                        "label": "Ruined King",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG de Turno",
                            "modelo": "Ruined King"
                        }
                    },
                    {
                        "label": "Raid: Shadow Legends",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG de Turno",
                            "modelo": "Raid: Shadow Legends"
                        }
                    },
                    {
                        "label": "Baldur's Gate",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG de Turno",
                            "modelo": "Baldur's Gate"
                        }
                    },
                    {
                        "label": "Dragon Quest VIII",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "RPG de Turno",
                            "modelo": "Dragon Quest VIII"
                        }
                    },
                ]
            },
          
            {
                label: 'Souls Like',
                routerLink: 'marca',
                queryParams: {
                    modelo: '',
                    marca: 'Souls Like'
                },

                items: [
                    {
                        "label": "Dark Souls 1",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": "Dark Souls 1"
                        }
                    },
                    {
                        "label": "Dark Souls 2",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": "Dark Souls 2"
                        }
                    },
                    {
                        "label": "Dark Souls 3 ",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": "Dark Souls 3 "
                        }
                    },
                    {
                        "label": "Demon Souls",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": "Demon Souls"
                        }
                    },
                    {
                        "label": "Bloodborne",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": "Bloodborne"
                        }
                    },
                    {
                        "label": "Sekiro: Shadow die Twice",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": "Sekiro: Shadow die Twice"
                        }
                    },
                    {
                        "label": "Ashen",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": "Ashen"
                        }
                    },
                    {
                        "label": "Necropolis",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": "Necropolis"
                        }
                    },
                    {
                        "label": "Lords of the Fallen",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": "Lords of the Fallen"
                        }
                    },
                    {
                        "label": "Elden Ring",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": "Elden Ring"
                        }
                    },
                    {
                        "label": ".",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": ""
                        }
                    },
                    {
                        "label": ".",
                        "icon": "pi pi-fw pi-check",
                        "routerLink": "exibicao",
                        "queryParams": {
                            "marca": "Souls Like",
                            "modelo": ""
                        }
                    }
                ]
            }
            
        ]
    }
}


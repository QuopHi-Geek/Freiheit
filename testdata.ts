
export interface  GameData {
    help_link_text: string;
    help_page_url_part: string;
    help_page_game_selector_value: string;
    help_page_game_button_url_part: string;
}

const GAME_DATA: { [key: string]: GameData } = {
    "Goldrausch": {
        "help_link_text": "Zur Goldrausch Hilfe",
        "help_page_url_part": "/goldrausch",
        "help_page_game_selector_value": "goldrausch",
        "help_page_game_button_url_part": "/goldrausch"
    },
};

export interface  GameData {
    help_link_text: string;
    help_page_url_part: string;
    help_page_game_selector_value: string;
    help_page_game_button_url_part: string;
}

const GAME_DATA = {
    "Teddy Thunder": {
          "help_link_text": "Zur Teddy Thunder's Bingo Buzz",
          "help_page_url_part": "/teddy-thunders-bingo-buzz",
          "help_page_game_selector_value": "teddy-thunders-bingo-buzz",
          "help_page_game_button_url_part": "/teddy-thunders-bingo-buzz"
      },

      "Cash Kiosk": {
          "help_link_text": "cash kiosk",
          "help_page_url_part": "/cash-kiosk",
          "help_page_game_selector_value": "cash-kiosk",
          "help_page_game_button_url_part": "/cash-kiosk"
      },
  };
  
  export default GAME_DATA;
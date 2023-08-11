Feature: booking tickets

    Scenario: switching tab and booking tickets

        Given user is on "https://qamid.tmweb.ru" page
        When user clicks on the tabs "body > nav > a:nth-child(2)"
        When user clicks on the tabs "body > main > section:nth-child(2) > div:nth-child(2) > ul > li"
        When user clicks on the tabs "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)"
        When user clicks on the tabs "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(2)"
        When user clicks on the tabs "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(3)"
        When user clicks on the tabs "body > main > section > button"
        Then user sees the booking information "1/1, 1/2, 1/3"